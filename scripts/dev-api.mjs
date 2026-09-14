import http from 'http';
import fs from 'fs';
import path from 'path';
import { pathToFileURL, fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const PORT = 3000;

const resolveApiModule = (requestPath) => {
  const cleanPath = requestPath.replace(/^\//, '').replace(/\?.*$/, '');
  const parts = cleanPath.split('/');

  if (parts[0] !== 'api' || parts.length < 2) {
    return null;
  }

  const fileSegments = parts.slice(1);
  const filePath = path.join(rootDir, 'api', ...fileSegments) + '.js';

  return fs.existsSync(filePath) ? filePath : null;
};

const readRequestBody = async (req) => {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');

  if (!rawBody) {
    return {};
  }

  try {
    return JSON.parse(rawBody);
  } catch {
    return rawBody;
  }
};

const makeResponseShim = () => ({
  statusCode: 200,
  headers: {},
  body: '',
  status(code) {
    this.statusCode = code;
    return this;
  },
  setHeader(name, value) {
    this.headers[name] = value;
    return this;
  },
  getHeader(name) {
    return this.headers[name];
  },
  json(payload) {
    this.headers['content-type'] = 'application/json';
    this.body = JSON.stringify(payload);
    return this;
  },
  send(payload) {
    this.headers['content-type'] = this.headers['content-type'] || 'text/plain';
    this.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
    return this;
  },
  end(payload) {
    if (payload !== undefined) {
      this.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
    }
    return this;
  }
});

const server = http.createServer(async (req, res) => {
  try {
    const requestPath = req.url || '/';
    const apiModulePath = resolveApiModule(requestPath);

    if (!apiModulePath) {
      res.writeHead(404, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
      return;
    }

    const moduleUrl = pathToFileURL(apiModulePath).href;
    const { default: apiHandler } = await import(moduleUrl);

    const request = req;
    request.body = await readRequestBody(request);

    const response = makeResponseShim();
    await apiHandler(request, response);

    const finalBody = response.body ?? '';

    res.writeHead(response.statusCode, response.headers);
    res.end(finalBody);
  } catch (error) {
    console.error('API proxy error:', error);
    res.writeHead(500, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error', details: error.message }));
  }
});

server.listen(PORT, () => {
  console.log(`Local API server running on http://localhost:${PORT}`);
});
