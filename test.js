const user1 = {name: "user1", age: 13, email: "abc@gmail.com"}
const user2 = {gender: "male", marks: 93}

// const user3 = {user1, user2}
// user3 = Object.assign(user1, user2)
user3 = {...user1, ...user2}
console.log(user3)
