const accoundId = 1234
let accountEmail = "nauman@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"

// accoundId = 12 //not allowed

accountEmail = "uman@gmail.com"
accountPassword = "125"
accountCity = "Lre"

/*
Prefer not to use var
because of issue in block scope and founctional scope
*/


console.log(accoundId);
console.table([accoundId, accountEmail, accountPassword, accountCity])
