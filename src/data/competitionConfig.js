/**
 * Competition Configuration
 * This file centralizes configurable competition settings.
 * Designed to eventually receive these values from Supabase backend.
 */

export const COMPETITION_CONFIG = {
  // The competition runs as five shared cases, each containing two MCQs.
  TOTAL_FILES: 5,

  // Event branding
  EVENT_NAME: "RATING WARS",
  CLUB_NAME: "NISM",
  CLUB_FULL_NAME: "FinTech & Quant Club",

  // Batches participating
  BATCHES: [
    { value: "PGDM_1", label: "PGDM 1st Year" },
    { value: "PGDM_2", label: "PGDM 2nd Year" },
    { value: "PGPISM", label: "PGPISM" },
    { value: "LLM", label: "LLM" },
    { value: "PGCSM", label: "PGCSM" }
  ],

  // Batch grouping for question papers from File 05 onward
  // Files 01-04 are always COMMON for all batches
  BATCH_GROUPS: {
    PGDM_1: "group_a",
    PGDM_2: "group_c",
    PGPISM: "group_c",
    LLM: "group_b",
    PGCSM: "COMMON"
  },

  // Timer configuration (in seconds)
  // Will eventually come from Supabase with actual start/end times
  TIMER_DURATION_SECONDS: 40 * 60, // 40 minutes

  // Competition rules
  UNLIMITED_ATTEMPTS: true,
  QUESTIONS_PER_FILE: 2
};
