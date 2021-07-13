import "./App.css";
import { useEffect, useState } from "react";
import GameboardTransition from "./components/Gameboard/GameboardTransition";
import Score from "./components/Score";

function App() {
  const [diff, setDiff] = useState(3);
  const [clickedCards, setClickedCards] = useState([]);
  const [winning, setWinning] = useState(true);
  const [score, setScore] = useState(0);

  const resetGame = () => {
    setClickedCards([]);
    setWinning(true);
    setScore(0);
  };

  useEffect(() => {
    const lastElemIndex = clickedCards.length - 1;
    const lastElemId = clickedCards[lastElemIndex];
    if (
      clickedCards.some((id, i) => id === lastElemId && i !== lastElemIndex)
    ) {
      setWinning(false);
    } else {
      setScore(clickedCards.length);
    }
  }, [clickedCards]);

  const updateClickedCards = (id) => {
    setClickedCards([...clickedCards, id]);
  };

  const changeDiff = (num) => {
    const cards = document.querySelectorAll(".Card");
    cards.forEach((card) => card.classList.add("showBack"));
    setTimeout(() => {
      setDiff(num);
      resetGame();
    }, diff * diff * 80 + 500); //wait for the transitions to end
  };

  return (
    <div className="App" style={{ "--gameboardSize": diff }}>
      <Score currentScore={score} diff={diff} />
      <button onClick={() => changeDiff(3)}>Easy</button>
      <button onClick={() => changeDiff(4)}>Medium</button>
      <button onClick={() => changeDiff(5)}>Hard</button>
      <GameboardTransition
        winning={winning}
        size={diff ** 2}
        sendCardId={updateClickedCards}
        reset={resetGame}
      />
    </div>
  );
}

export default App;
