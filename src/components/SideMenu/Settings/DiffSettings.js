import React from "react";

export default function DiffSettings(props) {
  const { setDiff, diff, resetGame } = props;

  const changeDiff = (num) => {
    const cards = document.querySelectorAll(".Card");
    cards.forEach((card) => card.classList.add("showBack"));
    setTimeout(() => {
      setDiff(num);
      resetGame();
    }, diff * diff * 80 + 500); //wait for the transitions to end
  };

  return (
    <div className="diffSettings">
      <button onClick={() => changeDiff(3)}>Easy</button>
      <button onClick={() => changeDiff(4)}>Medium</button>
      <button onClick={() => changeDiff(5)}>Hard</button>
    </div>
  );
}
