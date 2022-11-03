"use strict";

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(2, 5));

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(600, 100));

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);


// const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);


function getExtremeElements(array) {
  
  return [array[0],array[(array.length) -1]]

}

console.log(getExtremeElements([1, 2, 3, 4, 5, 6]));