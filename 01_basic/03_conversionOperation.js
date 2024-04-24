let score = "33abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number (score) // it will covert the string in to number (NaN => not a number)

console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0;

// convert in boolen
let isLoggedIn = 1

let boolenLoggedIn = Boolean (isLoggedIn)
console.log(boolenLoggedIn)

// 1 => true ; 0 => false
//"" => fasle
//"if add any thing " => true

//convet in string

let someNumber = 254

let someNumberIn = String (someNumber)
console.log(typeof (someNumberIn))
console.log(someNumberIn)
