class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is loggedIn`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // instead of  setUsername.call(this, username) now super keyword is used
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`${this.username} can add new courses`)
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()
chai.logMe()

const tea = new User("tea")
tea.logMe()
