// string in javascript

let stringOne = "hello";
let stringTwo = "world";

let stringThree = stringOne + stringTwo;

console.log("The name of whole string is:" + stringThree);

const name = "soumya";
const repoCount = 10;
// console.log(name + repoCount + "thse are repo numbers");
// new way to write string

let city1 = "cuttack";
let city2 = "kendujhar";

console.log(
  `which city famous for as old city is ${city1} its my district ${city2}`
);

console.log(city1[0]);
console.log(city1.length);
console.log(city1.toUpperCase());
console.log(city1.toLowerCase());
console.log(city1.charAt(1));
console.log(city1.indexOf("c"));

// console.log(city1.__proto_)

const gameName = new String("gtavice city");



// string slicing

const newGameName = gameName.substring(0, 4)
console.log(newGameName)

// const  anotherGame = gameName.slice(-2 , 4)
// console.log(anotherGame) 
// trim string
const newstring1 = "   superman   "
console.log(newstring1) //not trim string
console.log(newstring1.trim()) // trimmed string
//replace string
const url = "https://www.triloset.com%%/home"

console.log(url.replace('%%', '-'))

//find a string using include

console.log(url.includes("triloset"))

