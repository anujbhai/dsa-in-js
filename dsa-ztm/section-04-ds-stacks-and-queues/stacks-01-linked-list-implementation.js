class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LLStack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(val) {
    const newNode = new Node(val)

    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const pointerPos = this.top

      this.top = newNode
      this.top.next = pointerPos
    }
    this.length++

    return this
  }

  pop() {
    if (!this.top) {
      return null
    }

    if (this.top === this.bottom) {
      this.bottom = null
    }
    // const pointerPos = this.top

    this.top = this.top.next
    this.length--

    return this
  }
}

const stack = new LLStack()

stack.push('google')
stack.push('udemy')
stack.push('discord')

console.log(stack)

stack.pop()

console.log(stack)

