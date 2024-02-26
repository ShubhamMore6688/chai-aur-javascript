//html collections and NodeList are not pure arrays

// selector - id

const title = document.getElementById('title')
console.log(title)


// tile.innerHTML (this give the all the inner text along with html properties also)
// 'Chai aur code  <span style="display: none;">this is span</span>'

// tile.innerText (this give the text that is only able display in browser)
// 'Chai aur code'

// tile.textContent(this give the all the text including text with display=none property)
// 'Chai aur code  this is span'



//class selectors
const titleByClass = document.getElementsByClassName('heading')


//querySelector
const heading = document.querySelector('h2') // if we have more than h2 tags it will select only 1st element
const List = document.querySelector('ul')

List.querySelector('li').style.backgroundColor="green" //we can set the style for the selected tag
 
List.querySelector('li').innerHTML = "Five" //we can change html inside that tag

List.querySelectorAll('li')

// querySelectorAll

const myH2 = document.querySelectorAll('h2')
//output - NodeList(4) [h2, h2, h2, h2] (this is not an array this is NodeList)

myH2[1].style.color = "orange" //like the array we can get the element from this nodelist

// in nodelist foreach is the only method to iterate through the NodeList(map is not present in this)
myH2.forEach((item) => {
    console.log(item)
})


//HTMLcollections
const myHtmlList = document.getElementsByClassName('list-item') //this return html collections with don't any iteration method
// output - HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]


// to perform iteration in HTMLCollection we need to convert it into array

const myConvertedArr = Array.from(myHtmlList) // convert html collection into array

myConvertedArr.forEach((item) => console.log(item))