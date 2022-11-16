"use strict";

//Moduł 2 lekcja 2 ROZGAŁĘZIENIA I CYKLE

console.log("5"); //string
console.log("dupa"); //string
console.log(5); //number

const condition = 3;
if (condition) {
  console.log("condition is true");
}
// przy const condition = 0; tu sie nic nie pokazalo na konsoli bo 0 to "falsy" ale wystarczy wpisać cokolwiek innego co nie jest falsy i bedzie ok "condition is true"
//inne falsy: '', 0, false (ale nie "false"!), null, undefined

const condition1 = 1;
if (!!condition1) {
  console.log(!!condition1);
}
//podwojna negacja daje true ale gdyby był tylko jeden ! to byłoby false

let x = 5;
x = 0;
x = !!x;
console.log(x);

let y = 0;
const subscription = "pro";
if (subscription === "pro") {
  y = 100;
}
console.log(y);

//do while

// let pass = "";
// do {
//   pass = prompt("input password minimum of 5 chars");
// } while (pass.length < 5);
// console.log(`your password is: ${pass}`);

console.log('-------');

//for loop
for (let i = 0; i <= 10; i++){
for (let j = 0; j <= 2; j++){
  console.log(`${i}-${j}`);
}
}
