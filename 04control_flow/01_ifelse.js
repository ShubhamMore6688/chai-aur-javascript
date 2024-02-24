//if

const temperature = 41
if(temperature > 50){
    console.log(`Temperature is greater than 50`)
}else{
    console.log(`Temperature is ${temperature}`)
}

const score = 200
if(score>100){
    let power = 80008
    console.log(`Power of User: ${power}`)
}
// console.log(`Power of User: ${power}`) // power cannto be accessed form outside it's scope

// nested if else
const balance = 1000
if(balance < 500){
    console.log("less than 500")
}else if(balance < 750){
    console.log("less than 750")
}else if(balance < 900){
    console.log("less than 900")
}else{
    console.log("less than 1200")
}

// && and ||
const isLoggedIn = true
const debitCard = true

if(isLoggedIn && debitCard){
    console.log("user can buy the course")
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("executed")
}