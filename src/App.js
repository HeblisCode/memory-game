import { useState } from "react";
import Gameboard from "./components/Gameboard";
import useFetch from "./components/useFetch";

function App() {
  const [diff, setDiff] = useState(3);

  const changeDiff = (num) => {
    setDiff(num);
  };

  const imagesArray = useFetch(diff ** 2);

  return (
    <div className="App">
      <button onClick={() => changeDiff(3)}>Easy</button>
      <button onClick={() => changeDiff(4)}>Medium</button>
      <button onClick={() => changeDiff(5)}>Hard</button>
      <Gameboard dataArray={imagesArray} />
    </div>
  );
}

export default App;
