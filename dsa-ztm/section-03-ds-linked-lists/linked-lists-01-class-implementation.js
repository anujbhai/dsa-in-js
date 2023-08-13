class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this
  }

  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  insert(i, val) {
    // check params
    if (i >= this.length) {
      return this.append(val)
    }

    const newNode = new Node(val)
    const leader = this.traverseToIndex(i - 1)
    const holdingPointer = leader.next

    leader.next = newNode
    newNode.next = holdingPointer

    this.length++

    return this.display()
  }

  traverseToIndex(i) {
    // check params
    let counter = 0
    let currentNode = this.head

    while (counter !== i) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  display() {
    const elements = []

    let currentNode = this.head

    while (currentNode) {
      elements.push(currentNode.value)
      currentNode = currentNode.next
    }

    console.log(elements.join(' --> '))
  }
}

const lList = new LinkedList(10)

lList.append(5)
lList.append(16)
lList.prepend(1)
lList.insert(2, 99)
lList.insert(200, 88)

lList.display()


