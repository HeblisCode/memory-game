import { useEffect, useRef } from "react";
import useFetch from "../useFetch";
import Card from "./Card";

const Gameboard = (props) => {
  const { size, sendCardId } = props;
  const [imageArray, setImageArray] = useFetch(size);
  const mounted = useRef(null);

  //flip and shuffle the cards
  function clickCard(id, ref) {
    const cards = document.querySelectorAll(".Card");
    //hide all the cards
    cards.forEach((card) => card.classList.add("showBack"));
    //wait till the transitions are over
    setTimeout(() => {
      setImageArray(shuffleArray(imageArray));
      sendCardId(id, ref);
    }, size * 80 + 500);
  }

  //flip the cards back after the shuffling is done
  useEffect(() => {
    //check if the Gameboard component is already mounted
    if (mounted.current) {
      const cards = document.querySelectorAll(".Card");
      setTimeout(() => {
        cards.forEach((card, i) => {
          card.classList.remove("showBack");
        });
      }, 0);
    }
  }, [imageArray]);

  function shuffleArray(array) {
    const shuffledArray = [];
    while (array.length !== 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      shuffledArray.push(array.splice(randomIndex, 1)[0]);
    }
    return shuffledArray;
  }

  return (
    <div className="Gameboard" ref={mounted}>
      {imageArray.map((image, i) => {
        return (
          <Card
            data={image}
            order={i}
            clickHandler={clickCard}
            key={image.id}
          />
        );
      })}
    </div>
  );
};

export default Gameboard;
