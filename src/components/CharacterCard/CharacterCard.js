import React from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
  return(
  <div onClick={()=> props.handleClick(props.id)} className="card">
    <div>{props.name}</div>
      <img className="image" alt={props.name} src={props.image}></img>
  </div>
  )
}
export default CharacterCard;