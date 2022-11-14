function calculateTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i++) {
    total += i;
  }
  return total;
}

console.log(calculateTotal(4));
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

console.log("-------");

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

//MODUŁ 2 zajęcia 1 (tablice)

const arr = ["Adam", "Janusz", "Grażyna", "Łukasz"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[-1]);

arr[0] = "Ewa";

console.log(arr);
console.log(arr.length);
// albo
//pokazuje ostatnią pozycję indexu (liczba, nr miejsca w tablicy)
const arrLength = arr.length;
console.log(arrLength);
console.log(arr[arr.length - 1]);
//pokazuje ostatnią wartość w tablicy (wartość przypisana do ostatniego indexu)
//Inny sposób to za pomocą AT (samo at pierwsza pozycja, at(-1) ostatnia)
console.log(arr.at());
console.log(arr.at(-1));
//niby mozna cos przypisac na ujemnym miejscu ale to NIE JEST DOBRA PRAKTYKA
arr[-2] = "test";
console.log(arr[-2]);

console.log("----------");
//ITERATION
//For
const clients = ["Monica", "Chandler", "Phoebe", "Ross"];

for (let i = 0; i < clients.length; i++) {
  console.log(`${clients[i]} - index ${i}`);
}

console.log("---------");
//For...of
for (const client of clients) {
  console.log(client);
}

//for of może też się iterować przy samych stringach, nie tylko tablicach
const bestLanguage = "javascript";
for (const char of bestLanguage) {
  console.log(char);
}

let isThereAClientNamedPhoebe;
for (const client of clients) {
  console.log("loop");
  if (client === "Phoebe") {
    isThereAClientNamedPhoebe = true;
    break;
  }
}
console.log(isThereAClientNamedPhoebe);

console.log("------");

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const treshold = 15;
for (const number of numbers) {
  if (number < treshold) {
    continue;
  }
  console.log(`Liczba większa niż ${treshold}: ${number}`);
}

//For each

const Numbers = [1, 2, 3, 4, 5, 6];

// Numbers.forEach((Number, i, arr) => {
//   console.log(`${Number} - index ${i}`, arr);
// });


//albo

const forEachFn = (Number, i, arr) => {
  console.log(`${Number} - index ${i}`, arr);
};
Numbers.forEach(forEachFn);
