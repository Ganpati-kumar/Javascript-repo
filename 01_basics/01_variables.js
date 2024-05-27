const accountId = 144553
let  accountEmail = "golu@google.com"
var accountPassword = "123"
accountCity = "Jaipur"

let accountState; // it shows undefined


// accountId = 2    // not allowed


accountEmail = "dgdsgdsdgh"
accountPassword = "q34253215"
accountCity = "Noida"


console.log(accountId);
/*
Prefer not use var 
because  of issue in block scope and functional scope

*/

console.table([ accountId,accountEmail,accountPassword,accountCity])
