//promises represent the completion or failure of an asynchronous operation and its resulting value

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log("promise consumed")
})


//2nd method

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("task 2 completed")
        resolve()
    },1000)
}).then(()=>{
    console.log("promise 2 consumed")
})


//3rd promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "user", password: "123"}) //we can send the data using the resolve function
    })
})

promiseThree.then(function(user){
    console.log(user)
})

//4th promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "user", password: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
    })
})

promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){   //this will work only when funcition get executed without error
    console.log(username)
}).catch(function(error){   //when error is occured this will triggered
    console.log(error)
}).finally(function(){ // this like default either promise is resolved or rejected this will execute
    console.log("the promise either resolved or rejected")
})

//5th promise

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers(){
//    try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//    } catch (error) {
//         console.log(error)
//    }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})