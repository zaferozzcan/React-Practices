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
import Card from "./components/Card"

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
  <div>
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>

  <Card
    name = "Beyonce"
    img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    phone = "+123456789"
    email = "b@ksakl.com"

   />

  </div>,
  document.getElementById("root")
);
