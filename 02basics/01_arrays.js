const myArr = [1,2,3, 4,5 ]
// console.log(myArr)

const newArr = new Array(1,2,3,4,5)
console.log(typeof newArr)

console.log(newArr[2])
console.log(newArr.push(9))
console.log(newArr)


const anotherArr = myArr.join() //convert the array into string datatype
console.log(typeof anotherArr)

newArr.pop(9); //remove the last element of the array
console.log(newArr)

newArr.unshift(3) //add the new element at the starting of array
console.log(newArr)

newArr.shift() //this is like pop but it remove the element from the starting of the array
console.log(newArr)

//slice and splice


console.log(newArr.slice(1,3)) //this gives the subarray from (1,2) & this will not modify the original array
console.log(newArr)

console.log(newArr.splice(1,3)) //this will modify the original array
console.log(newArr)