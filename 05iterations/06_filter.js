const coding = ["js","ruby","java","python","cpp"]

coding.forEach((event)=>{   //we cannot store this in variable it does not return any value
    // console.log(event)
})



const arr = [1,2,3,4,5,6,7,8,9,10]
const myNum = arr.filter((item)=>item>4) //implicite return
const myNum2 = arr.filter((event)=>{ //we can store the value inthe suj
   return event>4  // explicitly return
})
// console.log(myNum2)


//books array
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let myBook = books.filter((item)=> item.genre === 'History' )  
myBook = books.filter((item)=>item.edition > 2000 && item.genre=== 'Fiction')
console.log(myBook)