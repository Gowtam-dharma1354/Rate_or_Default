/**
 * FileQuestion Component
 * Renders a static case on the left and a sequential MCQ flow on the right.
 */

import React, { useEffect, useState } from "react";
import ClubBrand from "./ClubBrand";
import CompetitionTimer from "./CompetitionTimer";
import FileProgress from "./FileProgress";
import { postAnswerSubmit } from "../lib/api";
import { supabase } from "../lib/supabaseClient";
import { COMPETITION_CONFIG } from "../data/competitionConfig";
import "./FileQuestion.css";

const padFileNumber = (num) => String(num).padStart(2, "0");

export default function FileQuestion({
  currentFile,
  totalFiles,
  question,
  onAnswerCorrect,
  onTimeUp,
  timerStartTime,
  fullscreenViolationCount = 0,
  sessionId,
  teamId,
  teamName
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    setSelectedOption("");
    setIsSubmitting(false);
    setQuestionIndex(0);
    setSubmitError("");
  }, [currentFile, question]);

  const currentQuestion = question?.questions?.[questionIndex] || null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedOption.trim() || !currentQuestion || !sessionId) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      let token;
      try {
        const { data: sessionData } = await supabase.auth.getSession();
        token = sessionData?.session?.access_token || null;
      } catch (authError) {
        console.warn("Unable to read auth session for answer submission:", authError);
      }

      const response = await postAnswerSubmit(token, {
        session_id: sessionId,
        team_id: teamId,
        team_name: teamName,
        case_number: currentFile,
        question_id: currentQuestion.id,
        question_index: questionIndex + 1,
        answer: selectedOption
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Unable to submit your answer.");
      }

      if (questionIndex >= (question?.questions?.length || 1) - 1) {
        await onAnswerCorrect(questionIndex + 1);
      } else {
        setQuestionIndex((prev) => prev + 1);
      }

      setSelectedOption("");
    } catch (error) {
      console.error("Unable to submit answer:", error);
      setSubmitError(error.message || "Unable to submit your answer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!question) {
    return <div className="file-question-placeholder">Loading case...</div>;
  }

  return (
    <div className="file-question">
      <div className="file-question-header">
        <ClubBrand />
        <div className="file-question-nav">
          <div className="file-number">
            CASE {padFileNumber(currentFile)} / {padFileNumber(totalFiles)}
          </div>
          <CompetitionTimer
            timerStartTime={timerStartTime}
            durationSeconds={COMPETITION_CONFIG.TIMER_DURATION_SECONDS}
            onTimeUp={onTimeUp}
            fullscreenViolationCount={fullscreenViolationCount}
          />
        </div>
      </div>

      <FileProgress currentFile={currentFile} totalFiles={totalFiles} />

      <div className="file-question-main">
        <div className="file-question-content">
          <div className="case-layout">
            <div className="case-panel">
              <div className="case-label">{question.caseTitle}</div>
              <p className="case-description">{question.caseText}</p>
            </div>

            <div className="question-panel">
              <div className="question-meta">
                Question {questionIndex + 1} of {question.questions.length}
              </div>

              <div className="question-prompt">{currentQuestion?.prompt}</div>

              <form onSubmit={handleSubmit} className="question-form">
                <div className="option-list">
                  {(currentQuestion?.options || []).map((option) => (
                    <label
                      key={option.value}
                      className={`option-item ${selectedOption === option.value ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        disabled={isSubmitting}
                      />
                      <span className="option-content">
                        <span className="option-letter">{option.label}</span>
                        <span className="option-text">{option.text}</span>
                      </span>
                    </label>
                  ))}
                </div>

                {submitError && (
                  <div className="feedback-message incorrect-feedback" role="alert">
                    {submitError}
                  </div>
                )}

                <button
                  className="primary-btn submit-btn"
                  type="submit"
                  disabled={isSubmitting || !selectedOption.trim()}
                >
                  SUBMIT ANSWER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
