import "./App.css";
import { useEffect, useState } from "react";
import GameboardTransition from "./components/Gameboard/GameboardTransition";
import Score from "./components/SideMenu/Settings/Score";
import DiffSettings from "./components/SideMenu/Settings/DiffSettings";
import HowToPlay from "./components/SideMenu/HowToPlay";

function App() {
  const [diff, setDiff] = useState(3);
  const [clickedCards, setClickedCards] = useState([]);
  const [winning, setWinning] = useState(true);
  const [score, setScore] = useState(0);

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

  const resetGame = () => {
    setClickedCards([]);
    setWinning(true);
    setScore(0);
  };

  const updateClickedCards = (id) => {
    setClickedCards([...clickedCards, id]);
  };

  return (
    <div className="App" style={{ "--gameboardSize": diff }}>
      <div className="gameboardWrapper">
        <GameboardTransition
          winning={winning}
          size={diff ** 2}
          sendCardId={updateClickedCards}
          reset={resetGame}
        />
      </div>
      <HowToPlay />
      <div className="settings">
        <Score currentScore={score} diff={diff} />
        <DiffSettings setDiff={setDiff} diff={diff} resetGame={resetGame} />
      </div>
    </div>
  );
}

export default App;
