for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop ${i}`)
    for(let j=1; j<10; j++){
        // console.log(`Inner loop ${j} and outer loop ${i}`)
    }
    
}

//break and continue 
for (let i = 0; i < 10; i++) {
    if(i==5){
        // console.log("Detected 5")
        break //after break statement we are come out of the scope of the for loop
    }
    // console.log(i)
    
}

//continue
for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log("Detected 5")
        continue //using this statement that perticular iteration in skip and next iteration get started
    }
    console.log(i)
    
}