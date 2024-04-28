// const numberOne = new Number(1);
// console.log(typeof numberOne);
// console.log(numberOne);

// numbers in javaScript

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
// console.log(typeof(balance))
// to show precession
console.log(balance.toFixed(3));
// precisize value
const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(2));

// write number with comma

const paymetRecived = 100000000;
console.log(paymetRecived.toLocaleString());
console.log(paymetRecived.toLocaleString("en-IN"));

// +++++++++++++++++++++Maths+++++++++++++++++++++++

console.log(Math);
// absoulate value
const stateNumber = -4;
console.log(Math.abs(stateNumber));

// round value

const stateNumber2 = 4.6;
console.log(Math.round(stateNumber2));

//round in top number

const stateNumber3 = 4.2;
console.log(Math.ceil(stateNumber3));

//round in bottow number

const stateNumber4 = 4.9;
console.log(Math.floor(stateNumber4));

// calulate the max number
let number1 = 10;
let number2 = 222;
let number3 = 1;
let number4 = -4;

console.log(Math.max(number1 , number2, number3, number4));

//calulate the min number from the varibale

let pulationOfOdisha = 222;
let pulationOfDelhi = 1250;
let pulationOfPune = 896587;
let pulationOfMumbai = 78924;
let pulationOfBangolre = 59;

let minPulation = Math.min(pulationOfOdisha, pulationOfBangolre, pulationOfDelhi, pulationOfMumbai, pulationOfPune);

console.log(minPulation)

// console.log(`Lowest Population state is ` + Math.min(pulationOfOdisha, pulationOfBangolre, pulationOfDelhi, pulationOfPune, pulationOfMumbai));


