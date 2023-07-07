class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(element) {
    const newNode = new Node(element)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  prepend(element) {
    const newNode = new Node(element)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.previous = newNode
      this.head = newNode
    }
  }

  remove(element) {
    if (!this.head) {
      return
    }

    let currentNode = this.head

    while (currentNode) {
      if (currentNode.element === element) {
        if (currentNode === this.head) {
          this.head = currentNode.next

          if (this.head) {
            this.head.prev = null
          } else {
            this.tail = null
          }
        } else if (currentNode === this.tail) {
          this.tail = currentNode.prev
          this.tail.next = null
        } else {
          currentNode.prev.next = currentNode.next
          currentNode.next.prev = currentNode.prev
        }

        break
      }

      currentNode = currentNode.next
    }
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

  displayReverse() {
    const elements = []

    let currentNode = this.tail

    while (currentNode) {
      elements.push(currentNode.element)
      currentNode = currentNode.prev
    }

    console.log(elements.join(' <-> '))
  }

  findLast() {
    if (!this.head) {
      return null
    }

    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    return currentNode
  }
}

var cities = new DoublyLinkedList()

cities.append('Conway')
cities.append('Russellville')
cities.append('Carlisle')
cities.append('Alma')

cities.display()

cities.remove('Carlisle')

cities.display()

cities.displayReverse()

