"use strict";

// STRING

const text = "abc";
console.log(typeof text);

const textt = "123";
console.log(typeof textt);

const quote = 'Jegomość powidział "dupa"';
console.log(quote);

const msg = "dupadupadupa";
console.log(msg.length);
const newMsg = msg.toUpperCase();
console.log(newMsg);
console.log(newMsg.toLowerCase());

const date = new Date();
console.log(date.toLocaleDateString("en"));

const username = "maciej";
const newUsername = username.charAt("0").toUpperCase() + username.slice(1);
console.log(newUsername);
console.log(username.slice(1));

// HOMEWORK
const text1 = "powiększ mnie!";
console.log(text1.toLocaleUpperCase());

const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";
console.log(text2.toLowerCase());

const text3 = "$#%#^ wytnij te dziwne znaki na początku!";
console.log(text3.slice(6));

const text4 = 'sprawdź, czy zawieram słowo "czy"';
console.log(text4.includes("czy"));

const text5 =
  'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
console.log(text5.charAt(2));

const text6 = "pies zamień każde słowo pies, na słowo kot pies";
console.log(text6.replaceAll("pies", "kot"));

const text7 = "podziel, ten, string, od, przecinków";
console.log(text7.split(","));

// NUMBERS

const num1 = 23;
const num2 = "45";
console.log(num1 + num2);
console.log(num2 * 1);
const num3 = "abcd";
console.log(num3 * 1);
console.log(0 / 0);

const num4 = 1351.124;
console.log(num4.toFixed(2));

const num5 = "123";
console.log(parseInt(num5));

// BOOLEAN

// Te wartości zawsze zwracają false!
// falseundefined
// null0
// NaN
// '' chyba ze damy w srodku spacje ' ' to juz nie false bo to nie jest pusty string tylko ze znakiem spacji

let a = true;
let b = false;
console.log(b);
console.log(a);

if (2 + 2) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

// NULL i UNDEFINED - oznaczają NIC, coś czego nie ma
// undefined przypisuje sie samo kiedy my po prostu nic nie wpiszemy, a null to my wpisujemy kiedy dajemy info programowi że czegoś nie ma

let elo;
console.log(elo);

let helo = null;
console.log(helo);

// TYPY ZŁOŻONE

// array
const colors = ["red", "blue", "yeallow"];
console.log(colors);

// function
function test() {
  console.log("Hej, jestem w funkcji :)");
}
test();

// objects
const person = {
  name: "Bogdan",
  agee: 60,
  favColour: null,
};
console.log(person);
