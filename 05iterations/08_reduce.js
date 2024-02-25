const myNums = [1,2,3]

const sum = myNums.reduce((accumulator, currentVal)=>{
    return accumulator+currentVal
}, 0) //initially accumulator use this value after that it take the accumulator+currentVal return by previous iteration
console.log(sum)

// this is used in ecommerce websites to add the price to objects in the cart

const books = [
    { title: 'Book One', genre: 'Fiction', price: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', price: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', price: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', price: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', price: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', price: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', price: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', price: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', price: 1981, edition: 1989 },
  ];

  const totalBill = books.reduce((acc, item)=>{
    return acc+item.price
  },0)

  console.log(totalBill)