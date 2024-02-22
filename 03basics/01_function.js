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
