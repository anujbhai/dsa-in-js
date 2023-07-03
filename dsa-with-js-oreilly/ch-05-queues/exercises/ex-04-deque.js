// Deque
class Deque {
  constructor() {
    this.queue = []
  }

  enqueueFront(item) {
    this.queue.unshift(item)
  }

  enqueueBack(item) {
    this.queue.push(item)
  }

  dequeueFront() {
    if (this.isEmpty()) {
      return 'Deque is empty.'
    }

    return this.queue.shift()
  }

  dequeueBack() {
    if (this.isEmpty()) {
      return 'Deque is empty.'
    }

    return this.queue.pop()
  }

  front() {
    if (this.isEmpty()) {
      return 'Deque is empty.'
    }

    return this.queue[0]
  }

  back() {
    if (this.isEmpty()) {
      return 'Deque is empty.'
    }

    return this.queue[this.queue.length - 1]
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

/* const deque = new Deque()

deque.enqueueFront(10)
deque.enqueueFront(20)
deque.enqueueBack(30)
deque.enqueueBack(40)

deque.print()

console.log(deque.size())
console.log(deque.front())
console.log(deque.back())

deque.dequeueFront()
deque.dequeueBack()

deque.print()

console.log(deque.size()) */

// ex 2 : Using the deque class to determine if a given word is a palindrome
function isPalindrome(word) {
  const deque = new Deque()

  // Enqueue each char of the word to the back of the deque
  for (let i = 0; i < word.length; i++) {
    deque.enqueueBack(word[i])
  }

  // Check if the word is a palindome
  while (deque.size() > 1) {
    const frontChar = deque.dequeueFront()
    const backChar = deque.dequeueBack()

    if (frontChar !== backChar) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('hello'))

