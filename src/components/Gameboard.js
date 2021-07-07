import { useEffect } from "react";
import Card from "./Card";
import "./Gameboard.css";

const Gameboard = (props) => {
  console.log("called");

  const flipCards = (cards) => {
    cards.forEach((card) => card.classList.toggle("showBack"));
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".Card");
    cards.forEach((card) =>
      card.addEventListener("click", () => flipCards(cards))
    );
  }, []);

  const { dataArray } = props;

  return (
    <div className="Gameboard">
      {dataArray.map((data, i) => {
        const { url, id } = data;
        return <Card key={id} image={url} />;
      })}
    </div>
  );
};

export default Gameboard;
