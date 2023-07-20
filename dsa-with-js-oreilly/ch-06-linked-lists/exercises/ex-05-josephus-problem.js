class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null
  }

  insert(data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      this.head.next = this.head
    } else {
      let current = this.head

      while (current.next !== this.head) {
        current = current.next
      }

      current.next = newNode
      newNode.next = this.head
    }
  }

  eliminateNthPerson(n) {
    let current = this.head
    let initSize = this.getSize()

    while (initSize < 2) {
      // find nth person to eliminate
      let count = 1

      while (count < n - 1) {
        current = current.next
        count++
      }

      // Eliminate the nth person
      const eliminatedPerson = current.next

      current.next = eliminatedPerson.next

      console.log(`Eliminated person ${eliminatedPerson.data}`)

      // move to the next person
      current = current.next

      initSize--
    }
  }

  getSize() {
    let current = this.head
    let size = 0

    do {
      size++
      current = current.next
    } while (current !== this.head)

    return size
  }

  getSurvivors() {
    if (this.head) {
      return [this.head.data, this.head.next.data]
    }

    return []
  }
}

function josephusProblem(n, m) {
  const circle = new CircularLinkedList()

  // create circular linked list with 'n' people
  for (let i = 1; i <= n; i++) {
    circle.insert(`Person ${i}`)
  }

  // eliminate every 'nth' person until 2 are left
  circle.eliminateNthPerson(m)

  const survivors = circle.getSurvivors()

  console.log(`Last 2 survivors: ${survivors[0]} and ${survivors[1]}`)
}

const n = 40
const m = 3

josephusProblem(n, m)

