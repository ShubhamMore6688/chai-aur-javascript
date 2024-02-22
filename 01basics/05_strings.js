const name = "user"
const age = 50

console.log(name+age);

const usr1 = "user"
const count = 50

console.log(`hello my name is ${usr1} and has a count of ${count}`)

const gameName = new String("dr-driving")
console.log(typeof gameName) //object

console.log(gameName.charAt(1)) //we can access each character in the string
console.log(gameName.length)
console.log(gameName.indexOf('d'))

console.log(gameName.slice(-8, 7)) //this will print string between 7 from start and 8 from the end of the string
//cut the string from 0 to 4 only 5 is not considered in this
// -ve value reverse the string
console.log(gameName.split('-')) //split the string in substrings seperated by '-'

console.log(gameName.substring(-8,7)) 
//this will not consider -ve if value is negative it will assume starting point as 0 and give the substring

const a = "       user1       "
console.log(a)
console.log(a.trim()) //trim does not consider the empty space at the starting and ending of the string


const url = "https://amazon.com/dfdfdfj%20fdjfkdss"
console.log(url.includes('%20'))
console.log(url.replace('%20', '_')) 


const para = "This is user1 for all the student and the principle also one user1"

console.log(para.replaceAll('user1', 'user'))