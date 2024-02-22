const marval_heros = ["thor", "spiderman", "batman"]
const dc_heros = ["superman", "flash", "ironman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros)

// const newHeros  = marval_heros.push(dc_heros)

// const newHero = marval_heros.concat(dc_heros)

const diff_value = [...marval_heros, ...dc_heros] //spread syntax
console.log(diff_value)

const diffArr = [1,2,2,3, [3,4,5], 6,7, [2,3,[2,1,6]]]
console.log(diffArr.flat(Infinity)) //remove all the subarrays and flat all the elements in single array

console.log(Array.isArray("name"))
console.log(Array.from("name")) // to create an array

//copy of the array 

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListCopy = Array.from(ingredientsList)
ingredientsListCopy[1].list = ["water, banana"]
console.log(ingredientsList)
console.log(ingredientsListCopy)

const fruit = ["mango", ["apple", "almand"], "banana"]
const newfruit = Array.from(fruit)
console.log(fruit)
console.log(newfruit)


const colors = ["red", "yellow", "blue"];
colors[5] = "brown"
console.log(colors) //[ 'red', 'yellow', 'blue', <2 empty items>, 'brown' ]

const freshFruit = fruit //this copy actually give the reference of the original array
console.log(freshFruit)
freshFruit[1] = "papaya" //changes in the freshFruit array also change the original fruit array
console.log(fruit)
console.log(freshFruit)