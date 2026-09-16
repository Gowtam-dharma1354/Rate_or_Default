/**
 * CompetitionTimer Component
 * Displays the remaining competition time and notifies the parent when it expires.
 */

import React, { useState, useEffect } from "react";
import "./CompetitionTimer.css";

export default function CompetitionTimer({
  timerStartTime,
  durationSeconds,
  onTimeUp,
  fullscreenViolationCount = 0
}) {
  const [remainingTime, setRemainingTime] = useState(durationSeconds);

  useEffect(() => {
    if (!timerStartTime || !durationSeconds) return undefined;

    let hasExpired = false;

    const updateRemainingTime = () => {
      const elapsed = (Date.now() - timerStartTime) / 1000;
      const nextRemainingTime = Math.max(0, durationSeconds - elapsed);
      setRemainingTime(nextRemainingTime);

      if (nextRemainingTime <= 0 && !hasExpired) {
        hasExpired = true;
        onTimeUp?.();
      }
    };

    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [timerStartTime, durationSeconds, onTimeUp]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = Math.floor(remainingTime % 60);
  const displayMinutes = String(minutes).padStart(2, "0");
  const displaySeconds = String(seconds).padStart(2, "0");

  return (
    <div className="competition-timer">
      <div className="timer-block">
        <div className="timer-label">TIME REMAINING</div>
        <div className="timer-display">
          {displayMinutes}:{displaySeconds}
        </div>
      </div>

      <div className="violation-block" aria-live="polite">
        <div className="timer-label">FULLSCREEN VIOLATIONS</div>
        <div className="violation-count">{fullscreenViolationCount}</div>
      </div>
    </div>
  );
}
