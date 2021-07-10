import React from "react";

export default function Gameover(props) {
  const { reset } = props;
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={reset}>Play Again</button>
    </div>
  );
}
