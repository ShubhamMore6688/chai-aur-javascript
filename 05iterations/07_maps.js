const myNum = [1,2,3,4,5,6,7,8,9,10]

const nums = myNum.map((item) => item*10) //map is used to perform operations on the each array element
// console.log(nums)

const myNumber = myNum
    .map((item)=> item*10)
    .map((item)=>item+1)
    .filter((item)=> item>40)

console.log(myNumber)