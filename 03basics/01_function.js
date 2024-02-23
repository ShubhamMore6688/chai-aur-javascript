function sayMyName() {
    console.log("hello")
    console.log("world")
}

// sayMyName => this is reference of that function
// sayMyName() => this is function execution

// sayMyName()

// function addTwoNumbers(num1, num2) //value specify in function defination is called parameters
// { 
//     console.log(num1+num2)
// }



// const result = addTwoNumbers(2,3) //value in the function calls are called as arguments

function addTwoNumbers(num1, num2){ 
    let result = num1+num2;
    return result;
}

const result = addTwoNumbers(3,2)
console.log("Result: " ,result)

function loginUserMessage(username = "default") //when we don't pass the argument then it will take by default this value
{
    // if(username === undefined){
    //     console.log("Please enter the user name")

    // }

    if(!username){
        console.log("please enter the username")
        return
    }
    return `${username} just logged in` //this atatement will execute only when username is not present
}

// console.log(loginUserMessage("user1"))
loginUserMessage()


///////////////////////// functions with objects and array ////////////////////////////////

function addCartPrice(...num) // ... is rest operator it helps to get the more than one arguments form the function
{
    return num;
}

console.log(addCartPrice(200, 400, 5000, 800))

function calculatePrice(var1, var2, ...num){
    return num //output: [ 800, 700, 2000 ]
}
console.log(calculatePrice(200, 400, 800, 700, 2000))


//object handle

const user = {
    username: "user1",
    price: 199
}

function handleObject(anyObj){
    return `Username is ${anyObj.username} and price is ${anyObj.price}`
}

// console.log(handleObject(user)) // we can pass the object as a parameter

console.log(handleObject({username: "user2", price: 3444})) //we can pass the object in this way also


//handle array

const priceArr = [200, 300, 6000, 1000, 298]
function handleArray(anyArr){
    return anyArr[1]
}

console.log(handleArray(priceArr))