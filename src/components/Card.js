import { useEffect } from "react";
import "./Card.css";

const Card = (props) => {
  useEffect(() => {}, []);

  return (
    <div className="Card">
      <div className="CardFront">
        <img src={props.image} alt="" />
      </div>
      <div className="CardBack">
        <img src="#" alt="" />
      </div>
    </div>
  );
};

export default Card;
