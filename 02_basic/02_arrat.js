const marvelHeros = ["sipderman", "Thor", "Ironman"];
const dcHeros = ["superman", "Flash", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3] [1]);

// const allHerosName = marvelHeros.concat(dcHeros);
// console.log(allHerosName);

// sperade opertor

const allnewHeros = [...marvelHeros, ...dcHeros];
console.log(allnewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArr = anotherArr.flat(Infinity);
console.log(realAnotherArr);

console.log(Array.isArray("Soumya"));
console.log(Array.from("Soumya")); // it convert it to array

let score1= 200;
let score2= 100;
let score3= 50;

console.log(Array.of(score1, score2, score3));