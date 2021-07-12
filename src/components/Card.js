import React, { useEffect, useState, useRef } from "react";
import "./Card.css";

const Card = (props) => {
  const { url, id, photographer, clickCard, order } = props;
  const [transitioning, setTransitioning] = useState(false);
  const cardRef = useRef(null);

  // useEffect(() => {
  //   cardRef.current.addEventListener("transitionend", () => {
  //     if (transitioning) {
  //       setTransitioning(false);
  //       cardRef.current.classList.remove("showBack");
  //       clickCard(id);
  //     }
  //   });
  //   return () => console.log("unmounting");
  // }, []);

  return (
    <div
      className={"Card"}
      onClick={() => clickCard(id)}
      ref={cardRef}
      style={{ "--order": order }}
    >
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
