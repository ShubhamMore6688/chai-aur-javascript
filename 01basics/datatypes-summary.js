// on the basis of how data is stored in the memory and how we are accessing the data
// datatypes are divided into primitives(call by value) and non-primitive(call by reference)

//primitive datatypes: number, string, null, undefined, boolean, bigint, symbol

const score = 100
const scoreValue = 293.9
const isLoggedIn = true
const num1 = Symbol('123')
const num2 = Symbol('123')

console.log(typeof num1) //symbol
console.log(num1 === num2) //false

//non primitive datatypes: Array, Objects, Functions

const heros = ["shaktiman", "spiderman", "superhero"]

const obj = {
    name: "user",
    age: 22
}

const myFun = function () {
    console.log("hello world")
}

console.log(typeof myFun) //function


//----------------------------------------------------------------------

//Stack and heap

//stack => primitive (this provide the copy of data)
//heap => nonprimitive (this provide actual reference of data in the memory)


//primitive
let userOne = "name"
let userTwo = userOne //userTwo get the copy of userOne
userTwo = "name2"
console.log(userOne) //userOne remain unchanged
console.log(userTwo)


//non-primitive

let obj1 = {
    email : "username@gmail.com",
    upi : "upi@sbi.com"
}

let obj2 = obj1
obj2.email = "user2@gmail.com"
console.log(obj1.email )
console.log(obj2.email)