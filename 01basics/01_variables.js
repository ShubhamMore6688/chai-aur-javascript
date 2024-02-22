const accountId = 122323
let accountName = "accountname"

//avoid using var due to issue with block scope and function scope
var accountPassword = "541223"
accountCity = "Pune"

// accountId = 2  this is not allowed because we declare it as a const
accountName = "name"
accountPassword = "87644"
accountCity = "mumbai"
console.log(accountId);
console.table([accountId, accountName, accountPassword, accountCity])