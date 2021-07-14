import "./App.css";
import { useEffect, useState } from "react";
import GameboardTransition from "./components/Gameboard/GameboardTransition";
import Score from "./components/SideMenu/Settings/Score";
import DiffSettings from "./components/SideMenu/Settings/DiffSettings";
import HowToPlay from "./components/SideMenu/HowToPlay";

function App() {
  const [diff, setDiff] = useState(3);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameover, setGameover] = useState(false);
  const [win, setWin] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const lastElemIndex = clickedCards.length - 1;
    const lastElemId = clickedCards[lastElemIndex];
    if (
      clickedCards.some((id, i) => id === lastElemId && i !== lastElemIndex)
    ) {
      setGameover(true);
      setWin(false);
    } else {
      if (clickedCards.length === diff ** 2) {
        setScore(clickedCards.length);
        setGameover(true);
        setWin(true);
      } else {
        setScore(clickedCards.length);
      }
    }
  }, [clickedCards, diff]);

  const resetGame = () => {
    setClickedCards([]);
    setGameover(false);
    setWin(false);
    setScore(0);
  };

  const updateClickedCards = (id) => {
    setClickedCards([...clickedCards, id]);
  };

  return (
    <div className="App" style={{ "--gameboardSize": diff }}>
      <div className="gameboardWrapper">
        <GameboardTransition
          win={win}
          gameover={gameover}
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
