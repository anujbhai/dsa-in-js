class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)

    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this
  }

  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head.prev = newNode
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
    const follower = leader.next

    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode

    this.length++

    return this.display()
  }

  remove(i) {
    const leader = this.traverseToIndex(i - 1)
    const nodeToRemove = leader.next

    leader.next = nodeToRemove.next
    this.length--

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

    console.log(elements.join(' <--> '))
  }
}

const dll = new DoublyLinkedList(10)

dll.append(5)
dll.append(16)
dll.prepend(1)
dll.insert(1, 99)

dll.display()

