import React from "react";
import { useState, useEffect } from "react";

export default function Score(props) {
  const { currentScore, diff } = props;
  const DIFF_OFFSET = 3;
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("memoryCatBestScoreArray")) || [0, 0, 0]
  );

  useEffect(() => {
    const currentDiff = diff - DIFF_OFFSET;
    if (currentScore > bestScore[currentDiff]) {
      setBestScore(
        bestScore.map((score, i) => {
          if (i === currentDiff) {
            return currentScore;
          }
          return score;
        })
      );
    }
  }, [bestScore, currentScore, diff]);

  useEffect(() => {
    localStorage.setItem("memoryCatBestScoreArray", JSON.stringify(bestScore));
  }, [bestScore]);

  return (
    <div>
      <h2>Current score: {currentScore}</h2>
      <h2>
        Best score ({diff} x {diff}): {bestScore[diff - DIFF_OFFSET]}
      </h2>
    </div>
  );
}
