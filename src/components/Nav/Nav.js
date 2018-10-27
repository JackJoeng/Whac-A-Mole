import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="cur-sco">Score: {props.score}</li>

      <li id="top-sco">Highest Score: {props.topScore}</li>

      <li id="rw">Result: {props.rightWrong}</li>
    </ul>
  </nav>
);

export default Nav;