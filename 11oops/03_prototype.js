// const user = "Hitesh        "
// console.log(user.length)
// console.log(user.trueLength) 
//we want to create a property called trueLength which trim all empty spaces and only give the string length

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spider: "spider",

    getPower: function(){
        console.log(`Power is ${this.thor}`)
    }
}

heroPower.getPower() 

// arrays and object are goes through Objects so when we add the our method in prototype of Object then all the
// objects have the access of that method
Object.prototype.chai = function(){ 
    console.log(`Hello from new prototype`)
}

heroPower.chai() 
myHeros.chai()

// but when we add the method in Arrays prototypes then it can be accessed only by the arrys
Array.prototype.tea = function(){
    console.log(`Hello from tea`)
}

myHeros.tea() //this method is only accessed by arrays 
// heroPower.tea()



//Inheritance

const user = {
    username: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const teachingAssistance = {
    isAvailable: true,
    __proto__: user // this is prototype inheritance using this syntax we can link teachingAssistance and user objects

}

// we can also use this outside
// Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(Teacher, user) 

anotherString = "chaiaurcode    "
console.log(anotherString.length)

String.prototype.trueLength = function(){ //this will add new method in the prototypes of the string
    console.log(`True length: ${this.trim().length}`) //this means jisane call kiya he wo
}

anotherString.trueLength()
"Hitesh  ".trueLength()
"chai".trueLength()