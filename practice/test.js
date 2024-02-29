// // const user1 = {name: "user1", age: 13, email: "abc@gmail.com"}
// // const user2 = {gender: "male", marks: 93}

// // // const user3 = {user1, user2}
// // // user3 = Object.assign(user1, user2)
// // user3 = {...user1, ...user2}
// // console.log(user3),


// // {
// //     "results": [
// //       {
// //         "gender": "female",
// //         "name": {
// //           "title": "Miss",
// //           "first": "Jennie",
// //           "last": "Nichols"
// //         },
// //         "location": {
// //           "street": {
// //             "number": 8929,
// //             "name": "Valwood Pkwy",
// //           },
// //           "city": "Billings",
// //           "state": "Michigan",
// //           "country": "United States",
// //           "postcode": "63104",
// //           "coordinates": {
// //             "latitude": "-69.8246",
// //             "longitude": "134.8719"
// //           },
// //           "timezone": {
// //             "offset": "+9:30",
// //             "description": "Adelaide, Darwin"
// //           }
// //         },
// //         "email": "jennie.nichols@example.com",
// //         "login": {
// //           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
// //           "username": "yellowpeacock117",
// //           "password": "addison",
// //           "salt": "sld1yGtd",
// //           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
// //           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
// //           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
// //         },
// //         "dob": {
// //           "date": "1992-03-08T15:13:16.688Z",
// //           "age": 30
// //         },
// //         "registered": {
// //           "date": "2007-07-09T05:51:59.390Z",
// //           "age": 14
// //         },
// //         "phone": "(272) 790-0888",
// //         "cell": "(489) 330-2385",
// //         "id": {
// //           "name": "SSN",
// //           "value": "405-88-3636"
// //         },
// //         "picture": {
// //           "large": "https://randomuser.me/api/portraits/men/75.jpg",
// //           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
// //           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
// //         },
// //         "nat": "US"
// //       }
// //     ],
// //     "info": {
// //       "seed": "56d27f4a53bd5441",
// //       "results": 1,
// //       "page": 1,
// //       "version": "1.4"
// //     }
// //   }

// //   const sym = Symbol("key1")
// //   const user = {
// //     username: "user",
// //     age: 13,
// //     [sym]: "keys",
// //     address: "pune"
// //   }

// //   console.log(user.username)
// //   console.log(user["age"])
// //   console.log(typeof user[sym])


// // const student = {
// //   name: "shubham",
// //   age: 33,
// //   courseName: "BTech"
// // }
// // const obj = new Object(student);
// // // obj.name = "user"
// // // obj.age = 34
// // // obj.courseName = "Hitesh"
// // // // console.log(typeof obj)
// // // console.log(obj)

// // console.log(obj)




// const user2 = {gender: "male", marks: 93}

// //object
// for(const key in user1){
  //   // console.log(key)
  //   // console.log(user1[key]);
  // }
  
  
  // //array
  // for(const key of arr){
    //   // console.log(key)
    // }
    // for(const key in arr){
      //   // console.log(arr[key])
      // }
      
      // arr.forEach((event)=>{
        //   // console.log(event)
        // })
        
        // const map = new Map()
        // map.set('JS','Javascript')
        // map.set('py','Python')
        // map.set('rb','ruby')
        
        // for(const [key,value] of map){
          //   // console.log(key,'-',value)
          // }
          
          // for(const key in map){
            //   // console.log(key)
            // }
            
            // map.forEach((event)=>{
    //   // console.log(event)
    // })
    
    // //for-of  =>  array, object, map
    // //for-in => array, object
    // //for each
    
    
    let data = new Date();
    // console.log(data)
    // console.log(data.toDateString())
    // console.log(data.toLocaleDateString())
    // console.log(data.toLocaleTimeString())
    let mydate = new Date(2020, 0, 12)
    // console.log(mydate.toLocaleDateString())
    
    // console.log(typeof mydate)
    
    
    let arr = new Array()
    arr.push(12)
    arr.push(43)
    arr.push(56)
    arr.push(78)
    arr.push(90)
    arr.push(22)
    
    // console.log(arr)
    arr.forEach((e)=>{
      // console.log(e)
    })
    
    const obj = {
      username: {
    firstname: "user",
    lastname: "name"
  }, 
  age: 13,
  password: "1233"
}

// console.log(obj)
// console.log(obj.username)

const myArr = [1,2,3,4,5,6,7,8,9]

for(const num of myArr){
  // console.log(num)
}

for(const num in myArr){
  // console.log(num)
}


myArr.map((e)=>{
  // console.log(e)
})


const user1 = {name: "user1", age: 13, email: "abc@gmail.com"}


for(const str in user1){
  // console.log(user1.str)
}
const strArr = ["spiderman","superman","hulk","jethalal"]

for(const key in strArr){
  // console.log(key) // this only give the keys in the array
  // console.log(strArr[key])
};


