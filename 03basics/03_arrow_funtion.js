//this => referece current context

const obj = {
    username: "user",
    age: 13,
    address: "pune",
    welcomeMessage: function(){
        console.log(`my name is ${this.username}, i am ${this.username} years old`)
        console.log(this)
    }
}

// obj.message = function(){
//     console.log(`welcome, ${this.username}`)
// }

// console.log(obj.message())

console.log(this) //{} => empty object in node environment
// console.log(this) // when we do this in browser console is return Window object
//global object in the browser is Window object

console.log(obj.welcomeMessage()) // this give current context of obj object


/////////////////////////// arrow funtion ////////////////////////////////

function chai(){
    let username = "user"
    console.log(this) //return various context related to that function
    console.log(this.username) //return undefined we cannot use this keyword in the functions it works only in the object
}

chai()


//arrow function

const code = () =>{
    let username = "user2"
    console.log(this.username) //in arrow functions also it returns undefined
    console.log(this) //return empty object
}

code()

// () => {} this is arrow function in {} required return statement (explicit return)
// () => () this () return statement is not required (implicit return)

//type1
const addTwo = (num1, num2) => {
    return num1+num2
}

console.log(addTwo(3,4))

//type2
const sumTwo = (num1, num2) => num1+num2
console.log(sumTwo(2,6))

const returnObj = () => ({username: "user1", age: 12}) //object is return in this way