// story behing the Math.PI

console.log(Math.PI) // we cannot change the value of PI

const mathDescriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(mathDescriptor)
// reason behind why we cannot change the value of PI
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


const chai = {
    user: "chai",
    name: "masala chai",
    email: "chai@google.com",
    isAvailable: function(){
        console.log("user is available")
    }
}

// console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "user"))
// output: { value: 'chai', writable: true, enumerable: true, configurable: true }

Object.defineProperty(chai, 'user', {
    writable: false, 
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai, "user"))

for (const [key, value] of Object.entries(chai)) {   
    // this function iterate throught chai object but doest not give the value user because of this enumerable:false

    // if i dont want to print the function value
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}