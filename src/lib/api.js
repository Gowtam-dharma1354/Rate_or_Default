// Small helpers to call server APIs with an access token
export async function postSessionCreate(token, teamName) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch('/api/session_create', {
    method: 'POST',
    headers,
    body: JSON.stringify({ team_name: teamName })
  });
  return res;
}

export async function postAnswerSubmit(token, payload) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch('/api/answer_submit', {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });
  return res;
}
