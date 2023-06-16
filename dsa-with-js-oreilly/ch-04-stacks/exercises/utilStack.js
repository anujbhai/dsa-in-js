module.exports = class Stack {
  constructor() {
    this.dataStore = []
  }

  push(element) {
    this.dataStore.push(element)
  }

  pop() {
    return this.dataStore.pop()
  }

  peek() {
    return this.dataStore[this.dataStore.length - 1]
  }

  clear() {
    this.dataStore = []
  }

  size() {
    return this.dataStore.length
  }

  isEmpty() {
    return this.dataStore.length === 0
  }
}

