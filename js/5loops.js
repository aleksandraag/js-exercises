// LOOP FOR

const animals = [
  "cat",
  "dog",
  "pig",
  "fish",
  "monkey",
  "rabbit",
  "frog",
  "racoon",
];

// for (let i = 0; i < 3; i++) {
// console.log(i);
// }

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);
// console.log(animals[4]);
// console.log(animals[5]);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Zadanie: stwórz pętlę z kolorami

const colors = [
  "red",
  "black",
  "blue",
  "yellow",
  "green",
  "pink",
  "purple",
  "white",
];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// LOOP WHILE (powinno być zawsze i ale nie mogą się powtarzać więc daję zastępcze literki)

let u = 2;
while (u < 5) {
  console.log(u);
  u++;
}

// LOOP DO...WHILE

let k = 0;
do {
  k++;
  console.log(k);
} while (k < 4);

// LOOP FOR...OF

const numbers23 = [1, 2, 3, 4, 5, 6];
// for (const number of numbers23) {
//   console.log(number * 2);
// }

// albo ten sposób jeśli chcemy pracować z konkretnymi indeksami, jeśli chcemy z całą tabelą to lepszy pierwszy sposób

for (let a = 0; a < numbers23.length; a++) {
  console.log(numbers23[2] * 2);
}

// ZAD.1 FOR

const cities = ["Kraków", "Jarosław", "Przemyśl", "Gdańsk", "Augutsów"];
for (let c = 0; c < cities.length; c++) {
  console.log(`To miasto nazywa się ${cities[c].toLocaleUpperCase()}`);
}

//ZAD.2 WHILE

let y = 0;
while (y < 10) {
  y += 2;
  console.log(y);
}

console.log("--------");

//ZAD.3 DO...WHILE

let z = 20;
do {
  z -= 3;
} while (z > 0);
console.log(z);

console.log("--------");

// ZAD. 4 FOR...OF

const numbers = [5, 8, 10, 23, 48, 60];
for (const number of numbers) {
  console.log(number / 5);
}

console.log("--------");

const numbers2 = [5, 8, 10, 23, 48, 60];
for (const number of numbers2) {
  // console.log(number % 2);
  if (number % 2 === 0) {
    console.log(
      `%cLiczba ${number} jest parzysta`,
      "background-color:gold; color:red"
    );
  } else {
    console.log(
      `%cLiczba ${number} jest nieparzysta`,
      "background-color:tomato"
    );
  }
}
