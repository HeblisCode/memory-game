import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Card from "./Card";
import "./Gameboard.css";

const Gameboard = (props) => {
  const { size, sendCardId } = props;
  const [imageArray, setImageArray] = useFetch(size);

  function clickCard(id) {
    setImageArray(shuffleArray(imageArray));
    sendCardId(id);
  }

  function shuffleArray(array) {
    const shuffledArray = [];
    while (array.length !== 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      shuffledArray.push(array.splice(randomIndex, 1)[0]);
    }
    return shuffledArray;
  }

  return (
    <div className="Gameboard">
      {imageArray.map((image) => {
        const { id, url, photographer } = image;
        return (
          <Card
            id={id}
            url={url}
            photographer={photographer}
            key={id}
            clickHandler={clickCard}
          />
        );
      })}
    </div>
  );
};

export default Gameboard;
