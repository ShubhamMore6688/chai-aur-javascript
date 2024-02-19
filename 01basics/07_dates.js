const date = Date()
console.log(date)

let myDate = new Date() 
console.log(typeof myDate) //this is object type


console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())

let myCreatedDate = new Date(2023, 0, 23) //month a started from 0
console.log(myCreatedDate)

let myCreatedDate1 = new Date("2023-01-12") //this date is in yyyy-mm-dd format
console.log(myCreatedDate1)

const myTimestamp = Date.now()
// this is give the date in miliseconds from the 1 jan 1970
console.log(myTimestamp)
console.log(myCreatedDate1.getTime()) //convert the date in timestamp format (this is in miliseconds)

console.log(Math.floor(myTimestamp/1000)) //to convert the milisecond timestamp in seconds (interview question)

let newDate = myCreatedDate1.toLocaleString('default', {
    weekday: 'short', //this give the day on that perticular date 
    year: 'numeric', //return year in 2 digit and numeric formate
    day: 'numeric', //day in that perticular date
    timeZone: 'UTC',
    timeZoneName: 'short'
})

console.log(newDate)

let createNewDate = new Date(2023,1,12,5,30,40)
console.log(createNewDate.toString())
console.log(typeof createNewDate)