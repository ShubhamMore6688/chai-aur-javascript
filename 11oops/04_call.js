 function setUsername(username){
    this.username = username  //the username is stored in the execution context of setUsername function
    // but when this function call is completed this function get poped from the stack and the execution context of 
    // this function is removed
    console.log("called")
 }

 function createUser(username, email, password){
    // setUsername(username) //this is only give the reference of the function 
    // to avoid the above behaviour we use call method and context createUser method is also send
    setUsername.call(this, username)
    this.email = email
    this.password = password
 }

 const chai = new createUser("user1", "chai@gmail.com", "123344")
 console.log(chai)
 
//  output: called
//  createUser {
//    username: 'user1',
//    email: 'chai@gmail.com',
//    password: '123344'
//  }