//conitional statemnent and operators

//Asignment opertors
// let a = 5;
// let b = 2;
// a += 1;
// console.log(a);

//comparision operators
let p = 10;
let q = 20;

let c = p === q;
let d = p != q;
console.log(c);
console.log(d);

//logical opertors

//logicla AND &&
/*
if both statement is
true true => true
true false =>false
false true => false
false false => false
*/
let a = 5;
let b = 5;

let condtion1 = a == b;
let condtion2 = a === b;
console.log(condtion1 && condtion2);

//logical or ||
/*
if both statemet is
true true => true
true false => true
false true => true
false false => false
*/

// logical not !
// true always = false and false is always true

let x = 4;
let y = 5;

// let cond1 = x > y

console.log(!(x < y));

// conditional statement

let age = 19;
if (age >= 18) {
  console.log("user is eligiable for vote");
} else {
  console.log("not eligibale");
}

// eles if statement

let mode = "sliver";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "blue") {
  color = "blue";
} else if (mode === "green") {
  color = "green";
} else {
  color = "white";
}

console.log(color);

// if (mode === "dark") console.log(mode);


// ternary operators
