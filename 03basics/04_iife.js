//Immediate Invoked Function Expressions (IIFE)
//it is a function that runs as soon as it is defined

// variable with global scope can be accessed and modified from anywhere in javascript environment. 
// this leads unintened consequences and conflicts or overwriting of variables 
// to avoid this iife helps to create isolated workspace 


(function chai(){ //named iife
    console.log(`Database is Connected`)
})(); //when 2 iife function are written in same file we need to give ; after 1st function

(()=>{ //anonymous iife
    console.log(`2nd Database is connected `)
})()


//normal function 
let statement = "this is statement"

function modifiedState() {
    statement = "this is modified statement"
}
modifiedState()
console.log(statement)
