// when we assume the value as true or false then it is called a truthy and falsy

const userEmail = "abc@gmail.com"
if(userEmail) //in this case we have not compare email with anything, if value is present we assume that it is true
{
    console.log("Got the user email")
}



//falsy value
// false, 0,-0, "", BigInt 0n, null, undefined, NaN

//truthy value
// '0', " ", 'false', [], {}, function(){}

//check the object is empty or not
const userObj = {}
if(Object.keys(userObj).length === 0){
    console.log("object is empty")
}

//NUllish Coalescing Operator (??): null and undefied

let val1;
// val1 = 5 ?? 10 //output: 5
// val1 = null ?? 10 //output: 10
val1 = undefined ?? 10 ?? 20 //output: 10
console.log(val1)


// Terniary Operator
// condition ? true : false

const mark = 100
mark > 80 ? console.log("marks are greater than 80") : console.log("marks are less than 80")