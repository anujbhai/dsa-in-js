const fs = require('fs')

function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insert = insert
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.length = length
  this.currPos = currPos
  this.moveTo = moveTo
  this.getElement = getElement
  this.length = length
  this.contains = contains
}
// find an element
function find(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i
    }
  }

  return -1
}

// adding an element
function append(element) {
  this.dataStore[this.listSize++] = element
}

// removing an element
function remove(element) {
  const index = this.find(element)

  if (index > -1) {
    this.dataStore.splice(index, 1)
    --this.listSize

    return true
  }

  return false
}

// determining number of elements
function length() {
  return this.listSize
}

// retrieve/view list's elements
function toString() {
  return this.dataStore
}

// insert an element
function insert(element, after) {
  const index = this.find(after)

  if (index > -1) {
    this.dataStore.splice(index + 1, 0, element)
    ++this.listSize

    return true
  }

  return false
}

// remove all elements
function clear() {
  this.dataStore = []
  this.listSize = 0
  this.pos = 0
}

// determining if a given value is in the list
function contains(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true
    }
  }

  return false
}

// trasversing
function front() {
  this.pos = 0
}

function end() {
  this.pos = this.listSize - 1
}

function prev() {
  if (this.pos > 0) {
    --this.pos
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos
  }
}

function currPos() {
  return this.pos
}

function moveTo(position) {
  this.pos = position
}

function getElement() {
  return this.dataStore[this.pos]
}

// class Customer {
//  constructor(name, movie) {
//    this.name = name
//    this.movie = movie
//  }
//}
/*function Customer(name, movie) {
  this.name = name
  this.movie = movie
}

try {
  // List-based application
  function createArr(file) {
    const data = fs.readFileSync(`./${file}`, 'utf8')

    const arr = data.split('\n')

    for (let i = 0; i < arr.length; ++i) {
      arr[i] = arr[i].trim()
    }

    return arr
  }

  // Using List to manage a Kiosk
  function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
      // if (list.getElement() instanceof Customer) {
      // console.log(`${list.getElement()["name"]}, ${list.getElement()["movie"]}`)
      // console.log(list.getElement()['name'] + ', ' + list.getElement()['movie'])
      // } else {
      console.log(list.getElement())
      // }
    }
  }

  function checkout(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
      let c = new Customer(name, movie)

      customerList.append(c)

      filmList.remove(movie)
    } else {
      console.log(movie + ' is not available')
    }
  }

  let movies = createArr('films.txt')

  console.log(movies)

  const movieList = new List()
  const customers = new List()

  for (let i = 0; i < movies.length; ++i) {
    movieList.append(movies[i])
  }

  console.log('Available movies: \n')

  displayList(movieList)

  checkout('Jane Doe', 'the Godfather', movieList, customers)

  console.log('\nCustomer Rentals: \n')

  displayList(customers)
} catch (err) {
  console.log('Error reading file', err)
} */

const names = new List()

names.append('Clayton')
names.append('Raymond')
names.append('Cynthia')
names.append('Jennifer')
names.append('Bryan')
names.append('Danny')

for (let i = 0; i > names.length(); i++) {
  const element = names.dataStore[i]
  console.log(element)
}

