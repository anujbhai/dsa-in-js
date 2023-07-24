const List = require('./example-01-class-implementation')
const fs = require('fs')

// Read movies text file and split it to separate lines
const moviesData = fs.readFileSync('films.txt', 'utf8')
const movies = moviesData.split('\n')

// remove spaces from array elements
for (let i = 0; i < movies.length; i++) {
  movies[i] = movies[i].trim()
}

class VideoRentalKiosk {
  constructor() {
    this.moviesList = new List()
    this.customerList = new List()
  }

  // add movies
  addMovies(movs) {
    for (const mov of movs) {
      this.moviesList.append(mov)
    }
  }

  // display movie list available
  displayMovieList() {
    console.log('Movies available at the kiosk:')

    for (this.moviesList.front(); this.moviesList.currPos() < this.moviesList.length; this.moviesList.next()) {
      const movie = this.moviesList.getElement()

      if (movie instanceof Customer) {
        console.log(`Customer: ${movie.name}, Movie: ${movie.movie}`)
      } else {
        console.log(movie)
      }
    }
  }

  // checkout movie
  checkout(customerName, movieName) {
    if (this.moviesList.contains(movieName)) {
      this.moviesList.remove(movieName)

      const customer = new Customer(customerName, movieName)
      this.customerList.append(customer)

      console.log(`Movie ${movieName} checked out by ${customerName}`)
    } else {
      console.log(`Movie ${movieName} is not available.`)
    }
  }
}

class Customer {
  constructor(name, movie) {
    this.name = name
    this.movie = movie
  }
}

const kiosk = new VideoRentalKiosk()

kiosk.addMovies(movies)

kiosk.displayMovieList()

kiosk.checkout('John Doe', 'The GodFather')
kiosk.displayMovieList()

