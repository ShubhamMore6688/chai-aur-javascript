//for-of

const arr = [1,2,3,4,5,6,7,8,9]

for(const num of arr){
    console.log(num)
}

//maps 

const map = new Map();
map.set('IN','India')
map.set('USA','United State of America')
map.set('UK', 'United Kingdom')

console.log(map)

for(const [keys, values] of map){
    // console.log(keys, '-', values)
}

//object for-of
// 

// const myObj = {
//     game1: "NFS",
//     game2: "spiderman"
// }

// for(const game of myObj){
//     console.log(game)
// }

// objects cannot be iteratable with forof loop