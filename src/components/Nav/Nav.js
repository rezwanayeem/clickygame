import React from "react";
import "./Nav.css";

// const Nav = props =><nav className="navbar">
// <ul>
//     <li className="name"><a href="/">Clicky Game</a></li>
//     <li className="score">Score: {props.score}</li>
// </ul>
// </nav>;
function Nav(props){
    return(
    <div className="nav">
        <div id="score" >Score: {props.score}</div>
        <div id="title">{props.title}</div>
    </div>
    )
}
export default Nav;
