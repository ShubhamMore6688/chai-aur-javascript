// execution of js

// global context
// function context

// phases in context
// creation(memory) phase - (let var = undefined)
// execution phase - (let var = 5)

// for each function call there is seperate execution context which get destored after complition of function execution
// call stack is mentained for the functions

// var vs let 

// var causing issues with block scope and function scope
// var can be accessible from outside the block scope also so we are avoid to use var

// datatypes
// number, string, boolean, null(empty), undefined(variable is defined but not declared)
// typeof null => object

// conversion

// const num = "223fg"
// console.log(Number(num)) => this return NaN(not a number)

// Number(null) => this give 0
// Number(undefined) => NaN

// empty string give 0 when converted into Number

// Boolean(null) & Boolena(undefined) ==> false


//operations
// first element what we have to consider string or number
// console.log("1" + 2 + 3) => 123
// console.log(1+2+"2") => 32

// x++ => value of x
// y=x++ => x+1

// ++x => x+1
// y=++x => x+1

// "2" == 2 --> true
// "2" === 2 --> false (strick check)

// (null >= 0) --> true
// (undefined > 0) --> false
// (undefined < 0) --> false

// strings

// str.slice(-7, 5) // check 7 from back side and 5 from the starting 
// split(-) // split string according to what we have give 
// substring(3,4) // create substring

// Math

// console.log(Math.floor(Math.random()*(max-min+1))+min)
// console.log(balance.toFixed(2)) //give the 2 numbers after the decimal point
// console.log(balance.toPrecision(3)) //give the first 3 numbers with round off

//dates

// let myCreatedDate = new Date(2023, 0, 23) //month a started from 0
// let myCreatedDate1 = new Date("2023-01-12") //this date is in yyyy-mm-dd format
// const myTimestamp = Date.now()
// this is give the date in miliseconds from the 1 jan 1970
// typeof Date => object

//stack and heap

//stack => primitive (this provide the copy of data)
//heap => nonprimitive (this provide actual reference of data in the memory)

//arrays

// const myArr = [1,2,3, 4,5 ]
// const newArr = new Array(1,2,3,4,5)
//slice(give the substring) and splice(remove that perticular substring from the array)
// const diff_value = [...marval_heros, ...dc_heros] //spread syntax two arrays can be concatinated like this 
// Arrays.from() this is used to create the copy of the array

//objects
// object literal -> 
// const obj = {}

//constructor based->
// const obj = new Object()

// Object.keys() => give the keys from the object
// Object.values() => give the values from the object
// Object.entries() => get the subarrays for each keys and values

