import React from "react";

function Card(props){
  return <div>
  <h1> {props.name}</h1>
  <img src = {props.img} alt = "img">  </img>
  <p> {props.phone}</p>
  <p> {props.email} </p>
  </div>
}

export default Card;
