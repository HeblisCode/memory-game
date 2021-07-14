import React from "react";
import githubLogo from "./../../images/GitHub-Mark-Light-120px-plus.png";

export default function Links() {
  return (
    <div className="Links">
      <a href="https://github.com/HeblisCode/memory-game">
        <img src={githubLogo} alt="Pexels logo" />
      </a>
      <a href="https://www.pexels.com">
        <img
          src="https://images.pexels.com/lib/api/pexels-white.png"
          alt="Pexels logo"
        />
      </a>
    </div>
  );
}
