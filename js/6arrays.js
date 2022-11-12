// Może być tablica w tablicy np const arr = [dog, cat, pig, [fish, frog, bird]]

//UNSHIFT, SHIFT <niedestrukcyjne>, PUSH, POP <destrukcyjne>

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Dodaje elementy na samym początku tablicy (-1, 0)
numbers.unshift(-1, 0);
console.log(numbers);

// Usuwa pierwszy element tablicy [0] czyli indeks zerowy
numbers.shift();
console.log(numbers);

console.log("--------");

const colors = ["yellow", "pink", "orange"];
console.log(colors);

// To samo co unshift tylko dodaje na końcu zamiast na początku, push (metoda destrukcyjna bo ingeruje nam w oryginalną tablicę) jest dużo częściej używana bo w przeciwieństwie do unshift nie zaburza nam tablicy tylko dodaje elementy NA KOŃCU
colors.push("gold");
console.log(colors);

// Odpowiednik shift na końcu to pop

colors.pop();
console.log(colors);

console.log("-------");

//Zadanko

const languages = ["polish", "english", "german"];
console.log(languages);
languages.unshift("chinese");
languages.push("spanish");
console.log(languages);

languages.shift("chinese");
languages.pop("spanish");
console.log(languages);

// MAP, CONCAT, SPREAD, REST

const Numbers = [1, 2, 3, 4, 5];

function multiply(x) {
  return x * 2;
}

// w mapie odwołujemy się do danej funkcji (callback) czyli w tym wypadku 'multiply', map działa podobnie do pętli bo przerabia wszystkie elementy po kolei, a na końcu zwraca nam NOWĄ TABLICĘ (see newNumbers)

const newNumbers = Numbers.map(multiply);
console.log(Numbers);
console.log(newNumbers);

// CONCAT w przeciwieństwie do push jest metodą NIEdestrukcyjną :)

const letters = ["a", "b", "c"];
const newLetters = Numbers.concat(69, true, letters);

console.log(newLetters);

console.log("------");

// SPREAD "..." rozsmarowuje nam tablicę czyli dzieli ją na kilk osobnych stringów

console.log(letters);
console.log(...letters);

const meals = ["pizza", "dumplings", "burger", "pasta"];
const drinks = ["cola", "water", "coffee", "tea"];
const menu = [...meals, ...drinks];
console.log(menu);

const menu2 = meals.concat(drinks);
console.log(menu2);

// można łączyć tablice za pomocą spreada lub concata ale spread lepszy bo prostszy zapis a do tego też od razu rozsmarowywuje tbalice

console.log("--------");

// SLICE & SPLICE

const numberss = [0, 0, 1, 1, 2, 2, 2];
const colorss = ["red", "green", "blue", true, 123];
const carss = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

const numberss2 = numberss.slice(0, 2);
console.log(numberss2);

const numberss3 = numberss.slice(4);
console.log(numberss3);

const colorss2 = colorss.splice(-2);
const randomStuff = colorss2;
console.log(colorss);
console.log(randomStuff);

const newCarss = carss.splice(2, 4, "test");
console.log(carss);
console.log(newCarss);

console.log("------");

// POZOSTAŁE METODY

const nmbrs = [0, 23, 48, 175, 2, 34, 11];
function nmbr(x) {
  return x % 2 === 0;
  // return dupa > 50
}
console.log(nmbrs.filter(nmbr));

// FOR EACH

nmbrs.forEach((nmbr) => console.log(nmbr));
console.log("-------");
nmbrs.forEach((nmbr) => console.log(nmbr * 5));

console.log("------");

console.log(nmbrs.includes(0));
console.log(nmbrs.includes("0"));
console.log(nmbrs.includes(10));

console.log("-------");

// indexOf zwraca indeks (pozycję) danego elementu, jeśli element nie występuje w tablicy to clg zawsze zwróci -1!!
console.log(nmbrs.indexOf(50));
console.log(nmbrs.indexOf(34));

// forEach vs map (obejrzec odc 55 jeszcze raz na koniec kursu) forEach wykonuje nam obliczenia na danej tablicy ale nic wiecej nie robi, nie zwraca nowej tablicy, map wykonuje te same obliczenia a do tego generuje nowa tablice

//forEach
const NUMBERS = [0, 1, 2, 3];
const newNUMBERS = NUMBERS.forEach((NUMBER) => console.log(NUMBER * 2));
console.log(newNUMBERS);

console.log("------");

//map
const mapNUMBERS = NUMBERS.map((NUMBER) => NUMBER * 2);
console.log(mapNUMBERS);

//ZADANIE 1

const LETTERS = ["c", "d"];
LETTERS.unshift("a", "b");
LETTERS.push("e", "f");
console.log(LETTERS);
console.log(LETTERS.includes("c"));

console.log('-----');

//ZADANIE 2

const nums = [1, 2, 3];
const food = ['hamburger', 'chips', 'pizza']
const numsFood = nums.concat(food);
console.log(numsFood);
const numsFood2 = [...nums, ...food];
console.log(numsFood2);

console.log('-------');

//ZADANIE 3

const numeros = [1, 5, 13, 26, 48];
const newNumeros = numeros.map(numero => numero * 5);
console.log(newNumeros);

for (const numero of newNumeros) {
  if (numero % 2 === 0) {
    console.log(`Liczba parzysta: ${numero}`);
  } else {
    console.log(`Liczba nieparzysta: ${numero}`);
  }
}

//ZADANIE 4

const COLOR = ['pink'];
COLOR.unshift('red');
COLOR.push('yellow');
console.log(COLOR);

// for (let i = 0; i < COLOR.length; i++) {
//   console.log(`Mój ulubiony kolor to:${COLOR[i].toUpperCase()}`);
// }

for (let i = 0; i < COLOR.length; i++) {
  console.log(`Mój ulubiony kolor to: ${COLOR[i].charAt(0).toUpperCase() + COLOR[i].slice(1)}
  `)
}

console.log('-----------');

//ZADANIE 5

const CARS = "Audi, Mercedes, BMW, Nissan, Dodge";
// console.log(CARS);
const newCARS = CARS.split(", ");
console.log(newCARS);

// if (newCARS.length > 3) {
//   console.log('Jest OK');
// } else {
//   console.log('Nie jest OK');
// }

newCARS.length > 3 ? console.log('Jest OK') : console.log('Nie jest OK');

if (newCARS.includes('Audi')) {
  newCARS.push("Opel");
} else {
  newCARS.pop();
}
console.log(newCARS);


