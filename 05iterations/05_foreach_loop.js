const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function(val){
    // console.log(val)
})

coding.forEach((event)=>{
    // console.log(event)
})

coding.forEach(printMe) //here we only need to give reference of the function don't need to execute it 

function printMe(event){
    // console.log(event)
}

coding.forEach((event, index, arr)=>{ //for each also have various parameters
    // console.log(event, index, arr)
})


//objects in array

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach((event)=>{ 
    console.log(event.langName) //we can access object in the array like this
})