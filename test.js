let newDate = new Date(2024, 0, 12);
console.log(newDate)
console.log(newDate.toString())


const date = Date.now();
console.log(date)
console.log(newDate.getTime())


let anotherDate = new Date("2002-01-12");
console.log(anotherDate.toString())
console.log(anotherDate.toLocaleDateString())

const timestamp = Date.now()
console.log(timestamp)

//convert the miliseconds in seconds

console.log(Math.floor(timestamp/1000))

const nextDate = new Date(2003,0, 12, 11, 2, 3)
console.log(nextDate.toString())

console.log(nextDate)
