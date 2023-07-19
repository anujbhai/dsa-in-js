class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class TestGrades {
  constructor() {
    this.head = null
  }

  addGrade(grade) {
    const newNode = new Node(grade)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = newNode
    }
  }

  displayGrades() {
    let current = this.head

    if (!current) {
      console.log('No grades entered yet.')
    } else {
      console.log('Test grades:')

      while (current) {
        console.log(current.element)
        current = current.next
      }
    }
  }
}

const testGrades = new TestGrades()

console.log('Enter test grades (type \'exit\' to finish).')

let input = ''
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (grade) => {
  if (grade.toLowerCase() === 'exit') {
    rl.close()
  } else {
    testGrades.addGrade(parseInt(grade))
  }
})

rl.on('close', () => {
  testGrades.displayGrades()
})

