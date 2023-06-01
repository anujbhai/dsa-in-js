const fs = require('fs')

class List {
  constructor() {
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
  }

  // find an element
  find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return i
      }
    }

    return -1
  }

  // adding an element
  append(element) {
    this.dataStore[this.listSize++] = element
  }

  // removing an element
  remove(element) {
    const index = this.find(element)

    if (index > -1) {
      this.dataStore.splice(index, 1)
      --this.listSize

      return true
    }

    return false
  }

  // determining number of elements
  length() {
    return this.listSize
  }

  // retrieve/view list's elements
  toString() {
    return this.dataStore
  }

  // insert an element
  insert(element, after) {
    const index = this.find(after)

    if (index > -1) {
      this.dataStore.splice(index + 1, 0, element)
      ++this.listSize

      return true
    }

    return false
  }

  // remove all elements
  clear() {
    this.dataStore = []
    this.listSize = 0
    this.pos = 0
  }

  // determining if a given value is in the list
  contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return true
      }
    }

    return false
  }

  // trasversing
  front() {
    this.pos = 0
  }

  end() {
    this.pos = this.listSize - 1
  }

  prev() {
    if (this.pos > 0) {
      --this.pos
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos
    }
  }

  currPos() {
    return this.pos
  }

  moveTo(position) {
    this.pos = position
  }

  getElement() {
    return this.dataStore[this.pos]
  }
}

try {
  // List-based application
  function createArr(file) {
    const data = fs.readFileSync(`./${file}`, 'utf8')

    const arr = data.split('\n')

    console.log(data)

    for (let i = 0; i < arr.length; ++i) {
      arr[i] = arr[i].trim()
    }

    return arr
  }

  // Using List to manage a Kiosk
  function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
      if (list.getElement() instanceof Customer) {
        console.log(`${list.getElement()["name"]}, ${list.getElement()["movie"]}`)
      } else {
        console.log(list.getElement())
      }
    }
  }

  class Customer {
    constructor(name, movie) {
      this.name = name
      this.movie = movie
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

  const movieList = new List()
  const customers = new List()

  for (let i = 0; i > movies.length; ++i) {
    movieList.append(movies[i])
  }

  console.log('Available movies: \n')

  displayList(movieList)

  checkout('Jane Doe', 'the Godfather', movieList, customers)

  console.log('\nCustomer Rentals: \n')

  displayList(customers)
} catch (err) {
  console.log('Error reading file', err)
}

