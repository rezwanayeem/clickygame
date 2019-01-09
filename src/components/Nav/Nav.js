import React from "react";
import "./Nav.css";

const Nav = props =><nav className="navbar">
<ul>
    <li className="name"><a href="/">Clicky Game</a></li>
    <li className="score">Score: {props.score} | Top Score: {props.topScore}</li>
</ul>
</nav>;

export default Nav;
