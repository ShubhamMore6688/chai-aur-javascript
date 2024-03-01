//  class User{
//     constructor(username, email, password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptyPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
//  }

//  const chai = new User("user1", "chai@gmail.com", "12334")

//  console.log(chai.encryptyPassword())
//  console.log(chai.changeUsername())

 // behind the scene of the classes 

 function User(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
 }

 User.prototype.encryptyPassword =  function(){
    return `${this.password}dafadf`
 }

 User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
 }

 const tea = new User("tea", "tea@gmail.com", "789")
 console.log(tea.encryptyPassword())
 console.log(tea.changeUsername())