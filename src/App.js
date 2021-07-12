import "./App.css";
import { useEffect, useState } from "react";
import Gameboard from "./components/Gameboard";
import Gameover from "./components/Gameover";
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
    console.log(clickedCards);
  };

  const changeDiff = (num) => {
    setDiff(num);
    resetGame();
  };

  return (
    <div className="App">
      <Score currentScore={score} diff={diff} />
      <button onClick={() => changeDiff(3)}>Easy</button>
      <button onClick={() => changeDiff(4)}>Medium</button>
      <button onClick={() => changeDiff(5)}>Hard</button>
      {winning ? (
        <Gameboard size={diff * diff} sendCardId={updateClickedCards} />
      ) : (
        <Gameover reset={resetGame} />
      )}
    </div>
  );
}

export default App;
