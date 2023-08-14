class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class ArrStack {
  constructor() {
    this.val = []
  }

  peek() {
    return this.val[this.val.length - 1]
  }

  push(val) {
    this.val.push(val)
  }

  pop() {
    return this.val.pop()
  }
}

const stack = new ArrStack()

stack.push('google')
stack.push('udemy')
stack.push('discord')

console.log(stack)

stack.pop()

console.log(stack)

