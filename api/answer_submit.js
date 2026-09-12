import { createAdminSupabase } from './_supabaseAdmin.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'Missing auth token' });

  const { session_id, answer, team_id, team_name, case_number, question_id, question_index } = req.body || {};
  if (!session_id || typeof answer !== 'string') {
    return res.status(400).json({ error: 'Missing session_id or answer' });
  }

  const supabase = createAdminSupabase();

  try {
    const { data: userData, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !userData?.user) return res.status(401).json({ error: 'Invalid auth token' });

    const { data: session, error: sessionErr } = await supabase
      .from('competition_sessions')
      .select('*')
      .eq('id', session_id)
      .maybeSingle();

    if (sessionErr) throw sessionErr;
    if (!session) return res.status(404).json({ error: 'Session not found' });

    const { data: team, error: teamErr } = await supabase
      .from('teams')
      .select('*')
      .eq('id', session.team_id)
      .maybeSingle();

    if (teamErr) throw teamErr;
    if (!team) return res.status(403).json({ error: 'Team not found for session' });
    if (team.auth_uid !== userData.user.id) return res.status(403).json({ error: 'Not authorized for this session' });

    const { data: pastAttempts } = await supabase
      .from('attempts')
      .select('attempt_number')
      .eq('session_id', session.id)
      .eq('level', session.current_level || 1)
      .order('attempt_number', { ascending: false })
      .limit(1);

    const attemptNumber = (pastAttempts?.[0]?.attempt_number ?? 0) + 1;

    const { error: insertErr } = await supabase.from('attempts').insert({
      session_id: session.id,
      team_id: team.id,
      level: session.current_level || 1,
      question_id: question_id || null,
      attempt_number: attemptNumber,
      submitted_answer: answer,
      is_correct: null
    });

    if (insertErr) throw insertErr;

    await supabase.from('competition_events').insert({
      session_id: session.id,
      team_id: team.id,
      event_type: 'ANSWER_SUBMITTED',
      metadata: {
        case_number: case_number ?? null,
        question_id: question_id ?? null,
        question_index: question_index ?? null,
        team_name: team_name || team.team_name || null,
        submitted_answer: answer,
        team_id: team_id || team.id
      }
    });

    return res.status(200).json({
      result: 'submitted',
      session_id: session.id,
      team_name: team.team_name || team_name || null,
      attempt_number: attemptNumber
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
}
