class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.current = null
  }

  isEmpty() {
    return this.head === null
  }

  append(newElement) {
    const newNode = new Node(newElement)

    if (this.isEmpty()) {
      this.head = newNode
      this.current = newNode
    } else {
      this.current.next = newNode
      this.current = newNode
    }
  }

  advance(n) {
    let count = 0

    while (count < n && this.current !== null) {
      this.current = this.current.next
      count++
    }
  }

  toString() {
    if (this.isEmpty()) {
      return 'LinkedList empty.'
    } else {
      let result = 'LinkedList:'
      let current = this.head

      while (current !== null) {
        result += current.element + ' -> '
        current = current.next
      }

      result += 'null'

      return result
    }
  }
}

const linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)

console.log('Initial List')
console.log(linkedList.toString())
console.log(linkedList.current)

linkedList.advance(2)

console.log('After advancing 2 nodes:')
console.log(linkedList.toString())
console.log(linkedList.current)

