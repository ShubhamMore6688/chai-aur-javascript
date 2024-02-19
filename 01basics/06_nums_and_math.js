const num = 100
const balance = new Number(200.646464)
console.log(num)
console.log(balance)
console.log(balance.toFixed(2)) //give the 2 numbers after the decimal point
console.log(balance.toPrecision(3)) //give the first 3 numbers with round off

const otherNum = 10000000
console.log(otherNum)
console.log(otherNum.toLocaleString('en-IN')) //represent larger no. in proper format

//-----------------------------Math-----------------------------

console.log(Math)

console.log(Math.abs(-4)) //remove the nagative sign of number
console.log(Math.round(4.4)) //round off the number
console.log(Math.ceil(4.4)) //return higher value
console.log(Math.floor(4.9)) //return smaller value
console.log(Math.max(2,3,4,9,1))
console.log(Math.pow(2,2)) //power function

console.log(Math.floor(Math.random()*10)+1)

let min = 10
let max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min) //random no between min and max