class Stack {
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

const s = new Stack()

s.push('Toni')
s.push('Jimmy')
s.push('Mark')
s.push('Marty')

console.log('length: ', s.size())
console.log(s.peek())

const popped = s.pop()
console.log(popped)

s.push('Ritchie')
console.log(s.peek())

// converting a number to base2 and base8
function mulBase(num, base) {
  const s2 = new Stack()
  let result = ''

  while (num > 0) {
    s2.push(num % base)
    num = Math.floor(num / base)
  }

  while (!s2.isEmpty()) {
    result += s2.pop()
  }

  return result
}

let num = 32
let base = 2

const biNum = mulBase(num, base)

console.log(`${num} converted to base ${base} is ${biNum}`)

num = 123
base = 8

const octNum = mulBase(num, base)

console.log(`${num} converted to base ${base} is ${octNum}`)

// determining if a given string is a palindrome
function isPalindrome(str) {
  const s3 = new Stack()

  const processedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

  for (let i = 0; i < processedStr.length; i++) {
    s3.push(processedStr[i])
  }

  let reversedStr = ''

  while (!s3.isEmpty()) {
    reversedStr += s3.pop()
  }

  return processedStr === reversedStr
}
console.log(isPalindrome('hello'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('A man, a plan, a canal: Panama'))

// Simulating recursive processes using a stack
function factorialRecursion(num) {
  if (num === 0) {
    return 1
  } else {
    return num * factorialRecursion(num - 1)
  }
}

const num_data = 5
const fact_data = factorialRecursion(num_data)

console.log(`The factorial of ${num_data} is: ${fact_data}`)

