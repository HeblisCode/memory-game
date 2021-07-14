import React from "react";
import "./SideMenu.css";
import Links from "./Links";

export default function HowToPlay() {
  return (
    <div className="HowToPlay">
      <h2>How to Play</h2>
      <p>
        This application puts your memory to the test. You are presented with
        multiple images of cats. The images get shuffled every-time they are
        clicked. You CAN NOT click on any image more than once or else your
        score resets to zero. The main objective is to get the highest score as
        possible.
      </p>
      <Links />
    </div>
  );
}
