module.exports = class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(item) {
    this.queue.push(item)
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    return this.queue.shift()
  }

  front() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    return this.queue[0]
  }

  back() {
    return this.queue[this.size() - 1]
  }

  toString() {
    let str = ''

    for (let i = 0; i < this.queue.length; i++) {
      str = str + `${this.queue[i]} \n`
    }

    return str
  }

  isEmpty() {
    return this.queue.length === 0
  }

  size() {
    return this.queue.length
  }

  print() {
    console.log(this.queue.join(' '))
  }
}

