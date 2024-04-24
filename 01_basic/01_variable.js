const accountId = 144513
let accountEmail = "soumya@google.com"
var acccountPassword = "1234567"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "ranjan@google.com"
acccountPassword = "8658981894"
accountCity = "ghatgaon"

console.table([accountEmail, acccountPassword, accountCity, accountState])

/*
Prefer not to use var
beacause of issue in block scope functional scope
*/