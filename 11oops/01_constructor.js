//Object literals

const user = {
    username: "user",
    loginCount: 4,
    loggedIn: false,
    getUserDetail: function(){
        // console.log(`Welcome, ${this.username}`)  //this keyword is used to access the current context
        // console.log(this) //this is current context for the function

    }
}

// console.log(user.getUserDetail())


function User(username, loginCount, loggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.loggedIn = loggedIn

    return this
}

// const userOne = User("user1", 4, false)
// const userTwo = User("user2", 8, true) 
//when we create such this will overwrite the privious values

//to avoid this we use new keyword which create new instance 

const userOne = new User("user1", 4, false)
const userTwo = new User("user2", 9, true)


// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor) //output: [Function: User] this represent the reference of itself