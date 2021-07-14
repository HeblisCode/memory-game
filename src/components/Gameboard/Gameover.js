import React from "react";
import "./Gameover.css";

export default function Gameover(props) {
  const { reset, win } = props;
  return (
    <div className="Gameover">
      <div className="gameOverCircle1"></div>
      <div className="gameOverCircle2"></div>
      <div className="gameOverCircle3">
        <h2>{win ? "You Win!" : "Game Over"}</h2>
        <button onClick={reset}>Play Again</button>
      </div>
    </div>
  );
}
