// import React from 'react';
// import ReactDOM from 'react-dom';
// import greeting from "./styling-practice"
//
// var name = "Zafer";
// var year = new Date().getFullYear()
//
// ReactDOM.render(
//   <div>
//     <p>Created by {name}</p>
//     <p>Copyright {year} </p>
//   </div>,
//   document.getElementById("root")
// )


import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();


var greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
