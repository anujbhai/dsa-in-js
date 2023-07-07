class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(newElement) {
    const newNode = new Node(newElement)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  prepend(item) {
    const newNode = new Node(item)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  findPrevious(item) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    let previousNode = null

    while (currentNode) {
      if (currentNode.element === item) {
        return previousNode
      }

      previousNode = currentNode
      currentNode = currentNode.next
    }

    return null
  }

  display() {
    const elements = []

    let currentNode = this.head

    while (currentNode) {
      elements.push(currentNode.element)
      currentNode = currentNode.next
    }

    console.log(elements.join(' -> '))
  }

  remove(item) {
    if (!this.head) {
      return
    }

    if (this.head.element === item) {
      this.head = this.head.next

      if (!this.head) {
        this.tail = null
      }

      return
    }

    let currentNode = this.head

    while (currentNode.next) {
      if (currentNode.next.element === item) {
        currentNode.next = currentNode.next.next

        if (currentNode.next === null) {
          this.tail = currentNode
        }

        return
      }

      currentNode = currentNode.next
    }
  }
}

const cities = new LinkedList()

cities.append('Conway')
cities.append('Russellville')
cities.append('Carlisle')
cities.append('Alma')

cities.display()

cities.remove('Carlisle')

cities.display()

