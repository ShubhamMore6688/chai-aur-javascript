// object
const myObj = {
    game1: "NFS",
    game2: "spiderman"
}

for(const key in myObj){ //using for-in loop it only give the keys from that key we need to find values of that keys
    // console.log(key) 
}

for(const key in myObj){
    console.log(myObj[key])
}


//arrays
const arr = ["pokimon", "spiderman", "superhero", "hulk"]
for(const key in arr){
    console.log(key) //this also give the keys
}

for(const key in arr){
    console.log(arr[key])
}

//maps
const map = new Map();
map.set('IN','India')
map.set('USA','United State of America')
map.set('UK', 'United Kingdom')

for(const key in map){
    // console.log(key)  //we cannot iterate through maps using for-in loop
}