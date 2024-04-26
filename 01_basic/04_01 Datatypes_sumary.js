// primitive Data type

// it give a copy of memory
/* 
7 types => String, Number, Boolen, Null, Undefined, Bigint, symbol
*/

const myName = "soumya Ranjan Sethy"; // string
const highwayNumber = 25; // number
const dataEnter = true; // boolen
const weatherNowIs = null; // null
let whoAreYou; // undefined
// symbol
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 123599999999775598n; // Bigint
console.log(typeof bigNumber);

//Refernce(Non primitive)
//it allocate memory directely
/* 
3 types => array, Objects, Functions
*/

const indianHeroName = ["ram", "hanuman", "shiva", "krishan"]; // array

let myObj = {
  fname: "sr",
  lname: "sethy",
}; // objects

const myFunction = function () {
  console.log("hello worlld");
}; // function
//********************************************//

// stack(primitive) heap(non-primitive)
// primitive - you wil get a copy of the variables , non-promitive - it will change from meomory.

let myYoutubeName = "trilosedotcom"
let anotherNaame = myYoutubeName

anotherNaame = "hello"

console.log(myYoutubeName)
console.log(anotherNaame)

let userOne = {
  name: "trilochan",
  upi: "trilocahn@ybl",
}

let userTwo = userOne

// console.log(userTwo)

userTwo.name = "newemail@gmail.com"

console.log(userOne.name)
console.log(userTwo.name)