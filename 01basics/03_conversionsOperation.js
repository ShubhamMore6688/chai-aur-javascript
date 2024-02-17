let number = "33adf"
console.log(number);
let stringToNum = Number(number)
console.log(stringToNum) //this will give NaN (Not a Number)
console.log( typeof stringToNum) //but the type is number

let num = null
let numToNumber = Number(num)
console.log(numToNumber) //when null is converted into Number it gives 0
console.log(typeof numToNumber) //type is number only

let undefinedNum = undefined
let undefinedToNumber = Number(undefinedNum)
console.log(undefinedToNumber) //when undefined is converted into Number it gives NaN
console.log(typeof undefinedToNumber) //type is number

let name = " "
let nameToNumber = Number(name) //empty string give 0 after converting it into number
console.log(nameToNumber) 
console.log(typeof nameToNumber)

let aa = 1
let aaToBoolean = Boolean(aa)
console.log(aaToBoolean)//convert 1 => true & 0 =>  false

let bb = " " // "" => false & " " => true
let bbToBoolean = Boolean(bb)
console.log(bbToBoolean) //any string or any number gives true

let cc = undefined // null & undefined => false
let ccToBoolean = Boolean(cc)
console.log(ccToBoolean)


///////////////////////Operations///////////////////////


let str1  = 1;
let str2 = "2";
let str3 = str1+str2
console.log(str3);

console.log("1" + 2 + 3) //in js according 1 no. all other are considerd as string
console.log(1+2+"2")

let count = 1;
++count;
console.log(count)


//prefix and postfix increment

let x=3
let y=x++
console.log(x); //this increment value by 1
console.log(y) //this gives same value of x

let a=4
let b = ++a
console.log(a) //this increment value by 1
console.log(b) //this also increment value by 1
