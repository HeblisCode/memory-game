import { useEffect, useRef } from "react";
import { useTransition, config, animated } from "@react-spring/web";
import useFetch from "../useFetch";
import Card from "./Card";
import "./Gameboard.css";

const Gameboardv2 = (props) => {
  const { size, sendCardId, winning } = props;
  const [imageArray, setImageArray] = useFetch(size);
  const mounted = useRef(null);

  const transitions = useTransition(winning, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 0,
  });

  //flip and shuffle the cards
  function clickCard(id) {
    const cards = document.querySelectorAll(".Card");
    //hide all the cards
    cards.forEach((card) => card.classList.add("showBack"));
    //wait till the transitions are over
    setTimeout(() => {
      setImageArray(shuffleArray(imageArray));
      sendCardId(id);
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

  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        ref={mounted}
        className="Gameboard"
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
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
      </animated.div>
    ) : (
      <animated.div
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
      >
        <h1>Game Over</h1>
        <button>Play Again</button>
      </animated.div>
    )
  );
};

export default Gameboardv2;
