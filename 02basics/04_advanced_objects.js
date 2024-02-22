
// const tinderUser = new Object()  //this is singleton(this is constuctor based implementation)

const tinderUser = {}

tinderUser.id = "dd12"
tinderUser.name = "user"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        username: {
            firstName: "sunny",
            lastname: "singh"
        }
    }
}

console.log(regularUser.fullname.username.firstName)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

//methods to merge two objects

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

console.log(obj3)

console.log(Object.keys(tinderUser)) //to get all the keys in the form of array
console.log(Object.values(tinderUser)) //to get all the values in the form of array

console.log(Object.entries(tinderUser)) //create subarray for each key and value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //to check if the perticular property is present in that object or not
