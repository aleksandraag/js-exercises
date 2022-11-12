"use strict";

const pass = "dupa123453wfs!n";
if (pass.length > 10 && pass.includes("!")) {
  console.log("Masz rewelacyjne hasło");
} else if (pass.length > 10) {
  console.log("Masz dobre hasło");
} else {
  console.log("Masz za krótkie hasło");
}
//  Jak skoncza nam sie 'if" i "else if" to mozna dopisac na samym koncu else jako koło ratunkowe w momencie gdy zaden z warunkow sie nie spelni, nie jest to obowiazkowe ale lepiej zeby w razie  takiego bledu pokazal sie taki komunikat a nie puste pole :)

const color = "blue";
if (color === "blue") {
  if (10 > 0) {
    console.log("true true");
  } else {
    console.log("okoń");
  }
} else {
  console.log("false");
}

const day = "niedziela";
// if (day === "poniedziałek") {
//   console.log("Dziś jest poniedziałek!");
// } else if (day === "wtorek") {
//   console.log("Dziś jest wtorek!");
// } else if (day === "środa") {
//   console.log("Dziś jest środa!");
// } else if (day === "czwartek") {
//   console.log("Dziś jest czwartek!");
// } else if (day === "piątek") {
//   console.log("Dziś jest piątek!");
// } else {
//   console.log("Weekend! :)");
// }

switch (day) {
  case "poniedziałek":
    console.log("Dziś jest poniedziałek");
    break;
  case "wtorek":
    console.log("Dziś jest wtorek");
    break;
  case "środa":
    console.log("Dziś jest środa");
    break;
  case "czwartek":
    console.log("Dziś jest czwartek");
    break;
  case "piątek":
    console.log("Dziś jest piątek");
    break;
  //   case "sobota":
  //   case "niedziela":
  //     console.log("Weekend!");
  //     break;
  default:
    console.log("Weekend!");
}
// albo zamiast 2 ostatnich można dać:  tak lepiej bo krócej
// default:
// console.log('Weekend!');

const x = 100;
if (x > 20) {
  console.log(`${x} > 20`);
} else {
  console.log(`${x} < 20`);
}

const newX = x > 20 ? console.log(`${x} > 20`) : console.log(`${x} < 20`);

const isLoggedIn = !true;
function loggedIn() {
  console.log("Jesteś zalogowany");
}
function loggedOut() {
  console.log("Nie jesteś zalogowany");
}

if (isLoggedIn) {
  loggedIn();
} else {
  loggedOut();
}

// albo za pomoca operatora warunowego

isLoggedIn ? loggedIn() : loggedOut();

// Zadanie1 - if

const z = 50;
const y = 30;

if (z > y) {
  console.log(`${z} > ${y}`);
}

// Zadanie 2 -  if else

const colour = "blue";
const newColour = "green";

if (colour === newColour) {
  console.log("Kolory się zgadzają");
} else {
  console.log("Kolory się nie zgadzają");
}

colour === newColour
  ? console.log("Kolory się zgadzają")
  : console.log("Kolory się nie zgadzają");

//Zadanie 3 if, else if, else

const a = 100;
const b = 100;

if (a > b) {
  console.log(`a > b`);
} else if (a === b) {
  console.log(`a = b`);
} else {
  console.log(`a < b`);
}

//Zadanie 4 switch

const promo = "60%";
switch (promo) {
  case "10%":
    console.log("Dziś mamy 10% zniżki!");
    break;

  case "20%":
    console.log("Dziś mamy 20% zniżki!");
    break;

  case "30%":
    console.log("Dziś mamy 30% zniżki!");
    break;

  // default:
  //   console.log('Drugi artykuł 25% taniej');

  default:
    console.log(`Dziś mamy ${promo} zniżki`);
}

//Zadanie 5 operator warunkowy

const h = 6;
const checkH =
  h % 2 === 0
    ? console.log(`h jest parzyste`)
    : console.log(`h jest nieparzyste`);

//Zadanie 6



// if (X >= 100) {
//   console.log("X >= 100");
// } else if (X < 100 && X > 30) {
//   console.log("X jest średniakiem");
// } else if (X < 30) {
//   console.log("X jest mały".toLocaleUpperCase());
// }

// albo (zeby zrobic duze litery)
const X = 49;
let text;

if (X >= 100) {
  text = "X >= 100";
} else if (X < 100 && X > 30) {
  text = "X jest średniakiem";
} else if (X < 30) {
  text = "X jest mały";
}
console.log(text.toLocaleUpperCase());
