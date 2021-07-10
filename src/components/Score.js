import React from "react";
import { useState, useEffect } from "react";

export default function Score(props) {
  const { currentScore, diff } = props;
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [bestScore, currentScore]);

  return (
    <div>
      <h2>Current score: {currentScore}</h2>
      <h2>
        Best score ({diff} x {diff}): {bestScore}
      </h2>
    </div>
  );
}
