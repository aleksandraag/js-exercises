"use strict";

let x = 4;
const y = 6;

const add = x + y;
console.log(add);

const substract = x - y;
console.log(substract);

const multiply = x * y;
console.log(multiply);

const divide = x / y;
console.log(divide);

// zeby zrobic x++ musi byc let zamiast const

x++;
x++;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

// % modulo daje w wyniku reszte z dzielenia, bardzo przydatne do spr czy mamy liczbe parzysta czy nieparzysta wiec dzielimy przez 2

const modulo = 10 % 7;
console.log(modulo);

// assignment operator

const name = "Ola";

let xx = 10;
let yy = 5;
console.log(xx);

// mimo ze wyzej xx = 10 to w rownaniu ponizej bedzie 15 mimo tego ze symbol ten sam, po prostu to co jest po prawej stronie przypisujemy do tego co jest po lewej, rownie dobrze moglismy tez po prostu nadpisac nowa wartosc, np xx=15
xx = xx + yy;
console.log(xx);

// mozna napisac to samo ale w wersji skroconej tj xx+ = yy to to samo co xx = xx + yy
xx += yy;
console.log(xx);

// to samo dla pozostalych dzialan
xx = xx - yy;
console.log(xx);
xx -= yy;
console.log(xx);

xx = xx * yy;
console.log(xx);
xx *= yy;
console.log(xx);

xx = xx / yy;
console.log(xx);
xx /= yy;
console.log(xx);

xx = xx % yy;
console.log(xx);
xx %= yy;
console.log(xx);


// comparison operators




