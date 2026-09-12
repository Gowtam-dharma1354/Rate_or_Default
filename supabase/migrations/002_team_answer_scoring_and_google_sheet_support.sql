-- 002_team_answer_scoring_and_google_sheet_support.sql
-- Purpose:
--   1) Keep Teams / Team Members structure aligned with the current app
--   2) Add team answer storage for every selected option per case/question
--   3) Add score summary support for admin dashboard
--   4) Add Google Sheet sync placeholders / metadata

-- ============================================================
-- 0) SAFETY: create base tables if they are missing
--    This prevents errors when migration 001 was not applied yet.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.competition_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  competition_name text,
  duration_seconds integer DEFAULT 3600,
  max_attempts_per_question integer DEFAULT 2,
  question_points jsonb DEFAULT '{"Q1": 10, "Q2": 20}'::jsonb,
  google_sheet_url text,
  google_sheet_tab_name text,
  enable_google_sheet_sync boolean DEFAULT false,
  sheet_last_synced_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.competition_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id uuid,
  status text DEFAULT 'ACTIVE',
  started_at timestamptz,
  expires_at timestamptz,
  current_level integer DEFAULT 1,
  score integer DEFAULT 0,
  failed_attempts_total integer DEFAULT 0,
  fullscreen_violations integer DEFAULT 0,
  disqualified_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.competition_sessions
  ADD COLUMN IF NOT EXISTS current_level integer DEFAULT 1,
  ADD COLUMN IF NOT EXISTS score integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS failed_attempts_total integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS fullscreen_violations integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS disqualified_at timestamptz,
  ADD COLUMN IF NOT EXISTS completed_at timestamptz;

-- Legacy cleanup: the app now uses hardcoded case/question data instead of the old questions table.
ALTER TABLE IF EXISTS public.attempts
  DROP CONSTRAINT IF EXISTS attempts_question_id_fkey;

ALTER TABLE IF EXISTS public.session_level_assignments
  DROP CONSTRAINT IF EXISTS session_level_assignments_question_id_fkey;

-- ============================================================
-- 1) TEAMS / TEAM MEMBERS (structure aligned with existing app)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.teams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_uid uuid NULL,
  team_code text UNIQUE NOT NULL,
  team_name text,
  batch text,
  status text DEFAULT 'PENDING',
  score integer DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.teams
  ADD COLUMN IF NOT EXISTS batch text,
  ADD COLUMN IF NOT EXISTS score integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS active boolean DEFAULT true;

CREATE TABLE IF NOT EXISTS public.team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id uuid REFERENCES public.teams(id) ON DELETE CASCADE,
  name text,
  email text,
  created_at timestamptz DEFAULT now()
);

-- ============================================================
-- 2) COMPETITION SETTINGS EXTENSIONS
--    Add Google Sheet placeholders and question scoring config
-- ============================================================

ALTER TABLE public.competition_settings
  ADD COLUMN IF NOT EXISTS question_points jsonb DEFAULT '{"Q1": 10, "Q2": 20}'::jsonb,
  ADD COLUMN IF NOT EXISTS google_sheet_url text,
  ADD COLUMN IF NOT EXISTS google_sheet_tab_name text,
  ADD COLUMN IF NOT EXISTS enable_google_sheet_sync boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS sheet_last_synced_at timestamptz;

-- Example of how to link the sheet later:
-- UPDATE public.competition_settings
-- SET
--   google_sheet_url = 'https://docs.google.com/spreadsheets/d/1RTDbTB84CVTQ81RotUTJrquqhmWPbR_EPmvDMpFNQT8/edit?gid=0#gid=0',
--   google_sheet_tab_name = 'Responses',
--   enable_google_sheet_sync = true
-- WHERE id = (SELECT id FROM public.competition_settings ORDER BY created_at DESC LIMIT 1);

-- ============================================================
-- 3) TEAM ANSWERS STORAGE
--    Each row stores one selected answer for one question in one case.
--    This supports backend evaluation and score calculation.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.team_case_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES public.competition_sessions(id) ON DELETE CASCADE,
  team_id uuid NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
  case_number integer NOT NULL CHECK (case_number >= 1),
  question_number integer NOT NULL CHECK (question_number >= 1),
  question_id text,
  selected_option text,
  submitted_answer text,
  is_correct boolean DEFAULT false,
  points_awarded integer DEFAULT 0,
  attempt_number integer DEFAULT 1,
  raw_payload jsonb DEFAULT '{}'::jsonb,
  google_sheet_row_id text,
  google_sheet_synced boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),

  CONSTRAINT unique_team_question_case UNIQUE (session_id, team_id, case_number, question_number)
);

-- ============================================================
-- 4) SCORE SUMMARY TABLE
--    This can be used directly by the admin dashboard.
--    The backend should update this table after evaluating each answer.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.team_case_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES public.competition_sessions(id) ON DELETE CASCADE,
  team_id uuid NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
  total_score integer DEFAULT 0,
  correct_answers integer DEFAULT 0,
  cases_completed integer DEFAULT 0,
  last_case_number integer DEFAULT 0,
  last_updated_at timestamptz DEFAULT now(),

  CONSTRAINT unique_team_session_score UNIQUE (session_id, team_id)
);

-- ============================================================
-- 5) GOOGLE SHEET SYNC LOG
--    Records each sync attempt to a Google Sheet.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.google_sheet_sync_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES public.competition_sessions(id) ON DELETE CASCADE,
  team_id uuid REFERENCES public.teams(id) ON DELETE CASCADE,
  case_number integer,
  question_number integer,
  sheet_url text,
  sheet_tab_name text,
  payload jsonb DEFAULT '{}'::jsonb,
  sync_status text DEFAULT 'PENDING',
  sync_error text,
  synced_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- ============================================================
-- 6) INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_team_case_answers_session_team
  ON public.team_case_answers(session_id, team_id);

CREATE INDEX IF NOT EXISTS idx_team_case_answers_case_question
  ON public.team_case_answers(case_number, question_number);

CREATE INDEX IF NOT EXISTS idx_team_case_scores_session_team
  ON public.team_case_scores(session_id, team_id);

CREATE INDEX IF NOT EXISTS idx_google_sheet_sync_log_session_team
  ON public.google_sheet_sync_log(session_id, team_id);

-- ============================================================
-- 7) OPTIONAL: VIEW FOR ADMIN DASHBOARD
--    Use this view if you want to show live scoring without updating
--    the existing competition_sessions.score field manually.
-- ============================================================

CREATE OR REPLACE VIEW public.team_score_dashboard AS
SELECT
  s.id AS session_id,
  s.team_id,
  t.team_name,
  t.team_code,
  t.status,
  COALESCE(sc.total_score, 0) AS total_score,
  COALESCE(sc.correct_answers, 0) AS correct_answers,
  COALESCE(sc.cases_completed, 0) AS cases_completed,
  s.current_level,
  s.started_at,
  s.expires_at,
  s.completed_at
FROM public.competition_sessions s
LEFT JOIN public.teams t
  ON t.id = s.team_id
LEFT JOIN public.team_case_scores sc
  ON sc.session_id = s.id AND sc.team_id = s.team_id;

-- ============================================================
-- 8) OPTIONAL NOTES
--    If you want Google Sheets integration, add your Google Apps Script
--    or external webhook endpoint and send each row from team_case_answers
--    to the sheet using this metadata:
--      - google_sheet_url
--      - google_sheet_tab_name
--      - google_sheet_row_id
--      - google_sheet_synced
-- ============================================================
