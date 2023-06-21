const Queue = require('../queues-01-class-implementation')
const fs = require('fs')

// Assigning partners at dance square
function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading file: ', err)
      return
    }

    const lines = data.split('\n')

    console.log(lines)

    for (let i = 0; i < lines.length; i++) {
      const dancer = lines[i].split(' ')
      const sex = dancer[0]
      const name = dancer[1]

      if (sex === 'F') {
        females.enqueue(new Dancer(name, sex))
      } else {
        males.enqueue(new Dancer(name, sex))
      }
    }

    console.log(males.queue)
    console.log(females.queue)
  })
}

function dance(males, females) {
  console.log('The dance partners are: \n')

  console.log(males.queue)
  console.log(females.queue)

  while (!females.isEmpty() && !males.isEmpty()) {
    person = females.dequeue()
    console.log(`Female dancer is: ${person.name}`)
    person = males.dequeue()
    console.log(`and the male dancer is: ${person.name}`)
  }
}

const maleDancers = new Queue()
const femaleDancers = new Queue()

getDancers(maleDancers, femaleDancers)
dance(maleDancers, femaleDancers)

if (!femaleDancers.isEmpty()) {
  print(`${femaleDancers.front().name} is waiting to dance.`)
}

if (!maleDancers.isEmpty()) {
  print(`${maleDancers.front().name} is waiting to dance.`)
}

