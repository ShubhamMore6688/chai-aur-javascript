//when we create object with constructor the it is singleton


//object literals
const mySymbol = Symbol("key1") //we can cret

const JsUser = {
    name: "User",
    "full name": "shubham", //to console log this, JsUser["full name"] is used
    [mySymbol]: "mykey",
    age: 18,
    location: "Jaipur",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday","Sunday"]
}

console.log(JsUser.email) 
console.log(typeof JsUser.mySymbol)
console.log(JsUser["full name"])
console.log(JsUser[mySymbol])

JsUser.email = "user@google.com",
// Object.freeze(JsUser)  //freeze the changes in that perticular object
JsUser.age = 2

JsUser.greeting = function () {
    console.log("hello users")
}

JsUser.greetingTwo = function () {
    console.log(`hello user ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())