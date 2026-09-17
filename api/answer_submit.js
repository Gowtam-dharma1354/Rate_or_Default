import { createAdminSupabase } from './_supabaseAdmin.js';
import { getQuestionPaper } from '../src/data/questionPaperSelector.js';

const normalizeAnswer = (value) => {
  if (value === null || value === undefined) return '';
  let str = String(value).trim().toLowerCase();
  str = str.replace(/\s+/g, ' ');
  str = str.replace(/(\d+)\s+%/g, '$1%');
  str = str.replace(/(\d+),(\d+)/g, '$1$2');
  return str;
};

const checkAnswer = (userAnswer, canonicalAnswer, acceptedAnswers = []) => {
  const normUser = normalizeAnswer(userAnswer);
  if (!normUser) return false;

  const normCanonical = normalizeAnswer(canonicalAnswer);
  if (normUser === normCanonical) return true;

  const normAlternatives = (acceptedAnswers || []).map(normalizeAnswer);
  if (normAlternatives.includes(normUser)) return true;

  const userNum = Number(normUser);
  if (!isNaN(userNum) && normUser.trim() !== '') {
    const isCanonicalNum = !isNaN(Number(normCanonical));
    if (isCanonicalNum && Number(normCanonical) === userNum) return true;

    for (const alt of normAlternatives) {
      if (!isNaN(Number(alt)) && Number(alt) === userNum) return true;
    }
  }

  return false;
};

const RATING_SCALE = [
  'AAA',
  'AA+', 'AA', 'AA-',
  'A+', 'A', 'A-',
  'BBB+', 'BBB', 'BBB-',
  'BB+', 'BB', 'BB-',
  'B+', 'B', 'B-',
  'C',
  'D'
];

const getQuestionScore = (question, answer) => {
  const exactPoints = question.id === 'Q1' ? 10 : 20;
  const selectedOption = question.options?.find(
    (option) => normalizeAnswer(option.value) === normalizeAnswer(answer)
  );
  const correctOption = question.options?.find(
    (option) => normalizeAnswer(option.value) === normalizeAnswer(question.answer)
  );

  if (!selectedOption || !correctOption) {
    const isCorrect = checkAnswer(answer, question.answer, question.acceptedAnswers || []);
    return { isCorrect, pointsAwarded: isCorrect ? exactPoints : 0, scoreType: isCorrect ? 'correct' : 'incorrect' };
  }

  const selectedRating = normalizeAnswer(selectedOption.text).toUpperCase();
  const correctRating = normalizeAnswer(correctOption.text).toUpperCase();
  const correctIndex = RATING_SCALE.indexOf(correctRating);
  const selectedIndex = RATING_SCALE.indexOf(selectedRating);

  if (selectedRating === correctRating) {
    return { isCorrect: true, pointsAwarded: exactPoints, scoreType: 'correct' };
  }

  if (question.id === 'Q1' && correctIndex !== -1 && selectedIndex !== -1 && Math.abs(correctIndex - selectedIndex) === 1) {
    return { isCorrect: false, pointsAwarded: 5, scoreType: 'nearby' };
  }

  return { isCorrect: false, pointsAwarded: 0, scoreType: 'incorrect' };
};

const getQuestionFromCase = ({ caseNumber, questionId, questionIndex }) => {
  const targetCase = getQuestionPaper(null, caseNumber);
  if (!targetCase) return null;

  if (questionId) {
    const matchedQuestion = targetCase.questions.find((item) => item.id === questionId);
    if (matchedQuestion) return matchedQuestion;
  }

  const safeQuestionIndex = Number(questionIndex || 1);
  return targetCase.questions[safeQuestionIndex - 1] || null;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { session_id, answer, team_id, team_name, case_number, question_id, question_index } = req.body || {};
  if (!session_id || typeof answer !== 'string' || !case_number) {
    return res.status(400).json({ error: 'Missing session_id, case_number, or answer' });
  }

  const supabase = createAdminSupabase();

  try {
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

    if (team_id && team_id !== team.id) {
      return res.status(403).json({ error: 'Team ID does not match the session' });
    }

    const caseNumber = Number(case_number);
    const questionNumber = Number(question_index || 1);
    const selectedQuestion = getQuestionFromCase({
      caseNumber,
      questionId: question_id,
      questionIndex: questionNumber
    });

    if (!selectedQuestion) {
      return res.status(400).json({ error: 'Question configuration not found for this case' });
    }

    const { isCorrect, pointsAwarded, scoreType } = getQuestionScore(selectedQuestion, answer);

    const { data: existingCaseAnswer } = await supabase
      .from('team_case_answers')
      .select('attempt_number, points_awarded, is_correct')
      .eq('session_id', session.id)
      .eq('team_id', team.id)
      .eq('case_number', caseNumber)
      .eq('question_number', questionNumber)
      .order('attempt_number', { ascending: false })
      .limit(1)
      .maybeSingle();

    const attemptNumber = (existingCaseAnswer?.attempt_number ?? 0) + 1;

    const { error: upsertAnswerErr } = await supabase
      .from('team_case_answers')
      .upsert(
        {
          session_id: session.id,
          team_id: team.id,
          case_number: caseNumber,
          question_number: questionNumber,
          question_id: selectedQuestion.id,
          selected_option: answer,
          submitted_answer: answer,
          is_correct: isCorrect,
          points_awarded: pointsAwarded,
          attempt_number: attemptNumber,
          raw_payload: {
            case_number: caseNumber,
            question_number: questionNumber,
            question_id: selectedQuestion.id,
            selected_option: answer,
            team_name: team_name || team.team_name || null,
            team_id: team_id || team.id
          },
          google_sheet_row_id: null,
          google_sheet_synced: false,
          updated_at: new Date().toISOString()
        },
        { onConflict: 'session_id,team_id,case_number,question_number' }
      );

    if (upsertAnswerErr) throw upsertAnswerErr;

    const { data: existingScore } = await supabase
      .from('team_case_scores')
      .select('*')
      .eq('session_id', session.id)
      .eq('team_id', team.id)
      .maybeSingle();

    const previousPoints = Number(existingCaseAnswer?.points_awarded ?? 0);
    const previousCorrect = existingCaseAnswer?.is_correct ? 1 : 0;
    const nextTotalScore = Number(existingScore?.total_score ?? 0) - previousPoints + pointsAwarded;
    const nextCorrectAnswers = Number(existingScore?.correct_answers ?? 0) - previousCorrect + (isCorrect ? 1 : 0);
    const nextCasesCompleted = Math.max(Number(existingScore?.cases_completed ?? 0), caseNumber);

    const { error: upsertScoreErr } = await supabase
      .from('team_case_scores')
      .upsert(
        {
          session_id: session.id,
          team_id: team.id,
          total_score: nextTotalScore,
          correct_answers: nextCorrectAnswers,
          cases_completed: nextCasesCompleted,
          last_case_number: caseNumber,
          last_updated_at: new Date().toISOString()
        },
        { onConflict: 'session_id,team_id' }
      );

    if (upsertScoreErr) throw upsertScoreErr;

    const { error: syncSessionScoreErr } = await supabase
      .from('competition_sessions')
      .update({
        score: nextTotalScore,
        updated_at: new Date().toISOString()
      })
      .eq('id', session.id);

    if (syncSessionScoreErr) throw syncSessionScoreErr;

    await supabase.from('competition_events').insert({
      session_id: session.id,
      team_id: team.id,
      event_type: 'ANSWER_SUBMITTED',
      metadata: {
        case_number: caseNumber,
        question_id: selectedQuestion.id,
        question_number: questionNumber,
        team_name: team_name || team.team_name || null,
        submitted_answer: answer,
        is_correct: isCorrect,
        points_awarded: pointsAwarded,
        score_type: scoreType,
        team_id: team_id || team.id
      }
    });

    return res.status(200).json({
      result: 'submitted',
      session_id: session.id,
      team_name: team.team_name || team_name || null,
      case_number: caseNumber,
      question_number: questionNumber,
      question_id: selectedQuestion.id,
      is_correct: isCorrect,
      points_awarded: pointsAwarded,
      score_type: scoreType,
      total_score: nextTotalScore,
      attempt_number: attemptNumber
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
}
