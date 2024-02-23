
//global scope

var c = 300
if(true){

    // block scope
    let a = 10;
    const b = 20;
    var c = 30; //var cause problems because var is availabel outside the block scope also
}

// console.log(a)
// console.log(b)
console.log(c)


//scope is differenct in browser and in code environment

// nested scope

function One(){
    const username = "user1"

    function Two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) //we cannot access this variabe because it is out of scope
    Two()
}

One()


// --------------------------------function declaration-------------------------------------

//type 1
console.log(sumOfTwo(2,1)) //in this type sumOfTwo can be access before its initialization
function sumOfTwo(a,b){
    return a+b;
}


//type2
// console.log(addTwo(3,2)) //but in this type we cannot access addTwo fun before initialization
const addTwo = function(a,b){
    return a+b
}

console.log(addTwo(5,2))
