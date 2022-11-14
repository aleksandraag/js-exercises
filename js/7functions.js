// Deklaracja funkcji, podlega hoistingowi (można zjeść tort zanim się go upiecze) czyli można przenieść wywołanie funkcji na górę, przed samą funkcja i będzie też działać
test();
function test() {
  console.log("Cześć!");
}
//dlatego ważne aby pamietać o zachowaniu struktury żeby nie robił się syf w kodzie

function test() {
  console.log("Cześć!");
}
test();

// Warunek funkcji

const TEST = function () {
  console.log("Czeeeeśśćć!!");
};
TEST();

//ale najlepiej jednak używać funkcji strzałkowej :)

// Funkcja z argumentami, niby argument i paramter to to samo, ALE:
// Parametry podajemy podczas tworzenia funkcji
// Argumenty podajemy podczas wywoływania funkcji
//parametr
function add(params) {
  console.log(`Podany argument to: ` + params);
}
add("test");
//argument

//kolejny przykład, podajemy 2 parametry, można ich podawać ile chcemy ale w praktyce lepiej nie za dużo
//powinno być function add(x, y) i add(2, 5) ale jest już wyżej więc dałam inne słówko
function dupa(x, y) {
  console.log(x + y);
}
dupa(2, 5);

//return

function Add(z, a) {
  if (z < a) return;
  console.log(a + z);
}
Add(5, 10); //tu sie nie pokazało bo funkcja spełniona, skończyło się na return
Add(15, 10); // tu się pokazało bo nie spełniona więc po return przeszło do clg

//Zadanie
//sposób1
const aboutMe = function (name, age) {
  console.log(`Cześć jestem ${name} i mam ${age} lat.`);
};
aboutMe("Ola", 25);

//sposób2
function ADD(name1, age2) {
  console.log(`Cześć jestem ${name1} i mam ${age2} lat`);
}
ADD("Małgorzata", 58);

//FUNKCJA ANONIMOWA

// const heading = document.querySelector('h1')
// heading.addEventListener('click', function () {
//     console.log('Kliknięto mnie!');
// })

//ale tak lepiej nie robić po kod mało czytelny, poniżej prawidłowy przykład

const heading = document.querySelector("h1");
function test() {
  console.log("Kliknięto mnie!");
}
heading.addEventListener("click", test);

console.log("--------");

//FUNKCJA STRZAŁKOWA

const arrowFunction = () => {};
//tak wygląda f strzałkowa

function Test(name) {
  console.log(`Mam na imię ${name}`);
}
Test("Klaudia");
//w funkcji strzałkowej będzie wyglądać tak:

const Test2 = (name) => {
  console.log(`Mam na imię ${name}`);
};
Test2("Olga");

//w przypadku f która zwraca tylko 1 rzecz można jeszcze bardziej uprościć zapis


