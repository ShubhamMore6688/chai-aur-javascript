 class User{
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
 }

 const chai = new User("chai", "chai@gmail.com", "158")
 console.log(chai.password)