import { useEffect, useState } from "react";
import "./Card.css";

const Card = (props) => {
  const { url, id, photographer, clickHandler } = props;

  useEffect(() => {
    console.log("mounting");
    return () => console.log("unmounting");
  }, []);

  return (
    <div className={"Card"} onClick={() => clickHandler(id)}>
      <div className="CardFront">
        <img src={url} alt="" />
      </div>
      <div className="CardBack">
        <img src="#" alt="" />
      </div>
    </div>
  );
};

export default Card;
