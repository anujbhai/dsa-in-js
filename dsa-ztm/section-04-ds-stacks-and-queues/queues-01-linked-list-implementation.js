class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(val) {
    const newNode = new Node(val)

    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.length++

    return this
  }

  dequeue() {
    if (!this.first) {
      return null
    }

    if (this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next

    this.length--

    return this
  }
}

const queue = new Queue()

queue.enqueue('Ravi')
queue.enqueue('Chandrakala')
queue.enqueue('Tanu')
queue.enqueue('Anuj')

console.log(queue.peek())

queue.dequeue()

console.log(queue)

