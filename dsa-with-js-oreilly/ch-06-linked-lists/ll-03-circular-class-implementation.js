class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null
    // this.tail = null
  }

  isEmpty() {
    return this.head === null
  }

  append(newElement) {
    const newNode = new Node(newElement)

    if (this.isEmpty()) {
      this.head = newNode
      // this.tail = newNode
      newNode.next = this.head
    } else {
      /* newNode.next = this.head
      this.tail.next = newNode
      this.tail = newNode
      this.head = newNode */
      let current = this.head

      while (current.next !== this.head) {
        current = current.next
      }

      current.next = newNode
      newNode.next = this.head
    }
  }

  prepend(item) {
    const newNode = new Node(item)

    if (this.isEmpty()) {
      this.head = newNode
      newNode.next = this.head
    } else {
      let current = this.head

      while (current.next !== this.head) {
        current = current.next
      }

      current.next = newNode
      newNode.next = this.head
      this.head = newNode
    }
  }

  remove(item) {
    if (!this.head) {
      return
    }

    let currentNode = this.head
    let previousNode = null

    while (currentNode.next !== this.head) {
      if (currentNode.element === item) {
        if (previousNode === null) {
          while (currentNode.next !== this.head) {
            currentNode = currentNode.next
          }

          currentNode.next = this.head.next
          this.head = this.head.next
          // this.tail.next = this.head
        } else {
          previousNode.next = currentNode.next
        }

        return
      }

      previousNode = currentNode
      currentNode = currentNode.next
    }
  }

  display() {
    if (this.isEmpty()) {
      console.log('Circular linked list empty.')
    } else {
      let currentNode = this.head
      let output = ''

      do {
        output += currentNode.element + ' -> '
        currentNode = currentNode.next
      } while (currentNode !== this.head)

      output += this.head.element
      console.log(output)
    }
  }
}

const circularLList = new CircularLinkedList()

circularLList.append(5)
circularLList.append(10)
circularLList.append(15)
circularLList.prepend(2)
circularLList.remove(10)

console.log('Circular linked list:')
circularLList.display()


