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
