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

console.log("---------");

//Reference primitive
//odnosi się do typów prymitywnych (liczby, nan, stringi)
let a = 5;
let b = 10;

a = b; // a = 10 wartość sklonowana z "pudełka" wyżej
b = 15;
console.log(a, b);

console.log("---------");

//Reference non primitive (e.g arrays, funtions, objects)

const x = ["Adam"];
const y = x; // bo tu nie jest jak wyżej że y = ['Adam'], w tym przypadku y jest x, w sensie y to inna nazwa na x, to nie jest prymitywne klonowanie tylko y staje się x
const z = y;
console.log(y);
y.push("Wkładam");
console.log(y);
console.log(x);
console.log(z);

console.log("--------");

//Array methods (metody tablicowe)
//string method split & join

const name = "Zuzia";
console.log(name.split(""));

const nameSurname = "Zuzia Grażyna Strzyżewska";
console.log(nameSurname.split(" "));
console.log(nameSurname);
const splitName = nameSurname.split(" ");
console.log(splitName);
//join robi odwrotnosc splita
console.log(splitName.join(" - "));

console.log("-------");

//array method index of

const names = ["Emma", "Cleo", "Rikki", "Charlotte"];
console.log(names.indexOf("Cleo"));
console.log(names.indexOf("Louise"));

console.log("-----");

//array method includes

const clientss = ["Will", "Irma", "Cornelia"];
console.log(clientss.includes("Caleb"));
console.log(clientss.includes("Cornelia"));

console.log("-------");

//array method push & pop & shift & unshift
const ns = [1, 2, 3, 4];
ns.push(5, 6);
console.log(ns);
ns.pop(); //usuwa OSTATNI elemnt tablicy
console.log(ns);

ns.unshift(0);
console.log(ns);
ns.shift(); //usuwa PIERWSZY element z tablicy
console.log(ns);

console.log("-------");

//array method slice
const nms = [1, 2, 3, 4];
console.log(nms.slice(0, 2)); //czyli wycina nam fragment array od indeksu 0 do indeksu 2 (z wyłączeniem tego ostatniego czyli w praktyce do indeksu 1 włącznie)
console.log(nms);
//WAŻNE! slice nie modyfikuje nam array, tylko wyciąga fragment
console.log(nms.slice(2));
console.log(nms.slice(-1));

console.log("-------");

//array method splice, można odejmować i dodawać
//odejmowanie (odklejanie)
const nr = [1, 2, 3, 4, 5];
// let deleted = nr.splice(0, 3) // a to już modyfikuje tablice, s.efekt końcowy (od indeksu 0 do 3 wyłącznie (czyli 2 włącznie czyli [1,2,3] więc zostaje nam tylko [4,5])) // deletes first 3 elements <0,3) (not inclusive więc przedział otwarty)
let deleted2 = nr.splice(-2); // deletes last 2 elements
// console.log(deleted, nr);
console.log(deleted2, nr);

const nu = [1, 2, 3, 4, 5];
//dodawanie (doklejanie), trzeba dopisać trzeci element po przecinku, wtedy program rozumie ze to ma zostac dodane
nu.splice(2, 0, "eloelo", "siema"); //2 - na której pozycji/indeksie dodać, 0 - ile elementów chcemy podmienić, 'eloelo' - wartość nowego elementu // add new element at index2
console.log(nu);

//a teraz nie tylko dodajemy ale też zamieniamy
const nbr = [1, 2, 3, 4, 5];
nbr.splice(2, 1, "jestem nowa"); // change 1
// nbr.splice(2, 1, "jestem nowa", 'ja też'); //change 1, add another
// nbr.splice(2,2,'elo', 'siema') // change 2
// nbr.splice(2,2,'elo') // change 1, delete another
console.log(nbr);

console.log("------");

//concat

const ns1 = [1, 2, 3, 4, 5];
const ns2 = [6, 7, 8, 9];
const ns3 = ns1.concat(ns2);
console.log(ns3);
//alternatywa: spread
const ns4 = [...ns1, ...ns2];
console.log(ns4);

console.log("------");

//array method find findIndex

const friends = [
  {
    name: "Joe",
    surname: "Tribbiani",
  },
  {
    name: "Rachel",
    surname: "Green",
  },
  {
    name: "Effy",
    surname: "Stonem",
  },
];

// const g = friends.indexOf({
//   name: "Rachel",
//   surname: "Green"
// });
// console.log(g);
//wychodzi -1 bo js nie może porównywać obiektów

// const foundEl = friends.find(
//   (el) => el.name === "Rachel" && el.surname === "Green"
// );
// console.log(foundEl);

//drugi sposób zapisania kodu
const foundEl = friends.find((el) => {
  console.log(el.name);
  return el.name === "Rachel" && el.surname === "Green";
});
console.log(foundEl);

foundEl.name = "John"; //jak widać tu też zmiana wpływa na pierwotny element, jak to w przypadku NONPRIMITIVE, j.w.
console.log(foundEl);
console.log(friends);

//znajdź index

const foundIndex = friends.findIndex((el) => el.surname === "Green");
console.log(foundIndex);

console.log("------");

//array method filter

const enemies = [
  {
    name: "Dawid",
    surname: "Gurgul",
  },
  {
    name: "Weronika",
    surname: "Gurgul",
  },
  {
    name: "Agata",
    surname: "Wolak",
  },
  {
    name: "Dupa",
    surname: "Gurgul",
  },
];

console.log(enemies.filter((el) => el.surname === "Gurgul"));
console.log(enemies);
//filter tylko filtruje, nie modyfikuje tablicy

console.log("-------");

//array method map

const myFriends = [
  {
    name: "Ola",
    surname: "Stec",
  },
  {
    name: "Asia",
    surname: "Wójcik",
  },
  {
    name: "Gabrysia",
    surname: "Stec",
  },
  {
    name: "Kasia",
    surname: "Stec",
  },
  {
    name: "Laura",
    surname: "Srogosz",
  }
];
const f = myFriends.map(el => {
  if(el.surname === "Stec"){
    el.surname = "Blue";
  }
  return el;
})
console.log(f);



console.log('-------');

// array method reduce

const nrs1 = [0, 1, 2, 3, 4, 5]
const sumOfN = nrs1.reduce(
  (acc, el) => {
    console.log(`acc => ${acc} ; el => ${el} ; acc + el => ${acc + el}`);
    acc += el;
    return acc;
  },  //function
  0   //accumulator
)
console.log(`reduced: ${sumOfN}`);

//to samo tylko zapisane normalnie, krotko
const nrs2 = [0, 1, 2, 3, 4, 5]
const sumOfN2 = nrs2.reduce((acc, el) => acc + el, 0)
//0 musi być bo to pierwszy element akumulatora, gdyby tam dać coś innego (np 1 czy 'a' to by nam popsuło wynik)

console.log('--------');

function filterArray(numbers, value) {

  let newArray = [];
  for (let i = numbers; i < value; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log("filterArray([1, 2, 3, 4, 5], 3)");



const modulo = 12 % 8;
console.log(modulo);


function absolute(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}
console.log(absolute(-2));

console.log('-------');

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);