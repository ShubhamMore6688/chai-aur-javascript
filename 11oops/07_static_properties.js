class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static uniqueId(){ // static help to deny access of this function to all users and also classes inherited from this class

        return `123`
    }
}


const chai = new User("chai")
chai.logMe()
// console.log(chai.uniqueId()) // we want to not give the access of that uniqueId method to any user
