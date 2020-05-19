import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array with doubled numbers of numbers array by using map function
const newNumbers = numbers.map(x => x * 2);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
const newFilteredNumbers = numbers.filter(num => num < 10);
console.log(newFilteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var newAcNumber = numbers.reduce(function(accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(newAcNumber);

////Find - find the first item that matches from an array.
const newFoundNumber = numbers.find(function(num) {
  return num > 10;
});
console.log(newFoundNumber);

////FindIndex - find the index of the first item that matches.
const newFindIndexNumber = numbers.findIndex(function(num) {
  return num > 10;
});
console.log(newFindIndexNumber);
