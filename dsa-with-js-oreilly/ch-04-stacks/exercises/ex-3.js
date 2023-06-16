const Stack = require('./utilStack')

function remmoveYellow(item) {
  const stack = new Stack()
  const tempStack = new Stack()

  // 1. Fill dispenser stack
  for (let i = item.length - 1; i >= 0; i--) {
    stack.push(item[i])
  }

  // 2. Remove yellow candles
  while (!stack.isEmpty()) {
    const candy = stack.pop()

    if (candy !== 'yellow') {
      tempStack.push(candy)
    }
  }

  // 3. Refill dispenser stack
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
  }

  return stack
}

const candies = ['red', 'yellow', 'white', 'yellow', 'red']
const updatedDispenser = remmoveYellow(candies)

console.log('Updated pez dispenser')

while (!updatedDispenser.isEmpty()) {
  console.log(updatedDispenser.pop())
}

