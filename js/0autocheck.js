function calculateTotal(number) {

    let total = 0;
    for (let i = 0; i <= number; i++) {
        total += i;
    }
    return total;
}

console.log(calculateTotal(4));
;


//mój pomysł (zły)
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (const arg of arguments) {
//     total += arg;
//   }
//   return total;
//   // Change code above this line
// }
// console.log(calculateTotal(5));

console.log('-------');

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i++) {
    total += order[i];
    // Change code above this line
  }
  return total;
}

console.log(calculateTotalPrice([9, 14, 2]));


function findLongestWord(string) {
  // Change code below this line
 let newString = string.split(" ");
  

  // Change code above this line
}

console.log(newString);