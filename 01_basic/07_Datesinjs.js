// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


// to declare a specific Date
let myCreatedDate = new Date(2024, 0, 23);
let myCreatedDatnew = new Date("01-14-2023");

console.log(myCreatedDate.toDateString());
console.log(myCreatedDatnew.toLocaleString());

// for time stamp

let myTimeStamp = Date.now()
console.log(myTimeStamp)
