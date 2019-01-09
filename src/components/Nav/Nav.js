import React from "react";
import "./Nav.css";

const Nav = props =>
<nav className="navbar">
<ul>
    <li className="name"><a href="/">{props.name}</a></li>
    <li className="score">Score: {props.score} | Top Score: {props.topScore}</li>
</ul>
</nav>;

export default Nav;
