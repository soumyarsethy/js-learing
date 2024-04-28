//array in js

const myArr = [0, 1, 2, 3, 4, 5];
const superHeros = ["shaktiman", "superman", "spiderman"];

const myArr2 = new Array(10, 20, 30, 40);

console.log(superHeros[1]);

// Array Methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(10)
// myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join(); // it convert it to string
// console.log(typeof newArr);
// console.log(myArr);

// slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1, 3);
console.log(myn2);
