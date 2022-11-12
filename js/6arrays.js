// Może być tablica w tablicy np const arr = [dog, cat, pig, [fish, frog, bird]]

//UNSHIFT, SHIFT, PUSH, POP

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

console.log('--------');

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

const newCarss = carss.splice(2, 4, 'test');
console.log(carss);
console.log(newCarss);

console.log('------');

// POZOSTAŁE METODY

const nmbrs = [0, 23, 48, 175, 2, 34, 11];
function nmbr(x) {
    return x % 2 === 0
    // return dupa > 50
}
console.log(nmbrs.filter(nmbr));

// FOR EACH

nmbrs.forEach(nmbr => console.log(nmbr));
console.log('-------');
nmbrs.forEach((nmbr) => console.log(nmbr * 5));

console.log('------');

console.log(nmbrs.includes(0));
console.log(nmbrs.includes('0'));
console.log(nmbrs.includes(10));

console.log('-------');

// indexOf zwraca indeks (pozycję) danego elementu, jeśli element nie występuje w tablicy to clg zawsze zwróci -1!!
console.log(nmbrs.indexOf(50));
console.log(nmbrs.indexOf(34));
