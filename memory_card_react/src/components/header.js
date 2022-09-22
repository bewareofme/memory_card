import React from "react";
import '../styles/header.css'
const Header = (props) => {
  return (
    <div className="header_container">
        Beware of me Game
    <div>
      <div>Current Score:{props.score}</div>
      <div>Best Score:{props.bestScore}</div>
    </div>
    </div>
  );
};

export default Header;