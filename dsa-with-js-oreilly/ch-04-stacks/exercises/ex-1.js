const Stack = require('./utilStack')
/*
* A stack can be used to ensure that an arithmetic expression has balanced paren‐
theses. Write a function that takes an arithmetic expression as an argument and
returns the postion in the expression where a parenthesis is missing. An example
of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159
* .24.
* */

function findMissingParenthesis(exp) {
  const stack = new Stack()

  for (let i = 0; i < exp.length; i++) {
    const char = exp[i]

    if (char === '(') {
      stack.push(i)
    } else if (char === ')') {
      if (stack.isEmpty()) {
        return i
      } else {
        stack.pop()
      }
    }
  }

  if (!stack.isEmpty()) {
    return stack.pop()
  }

  return -1
}

const expression = '2.3 + 23 / 12 + (3.14159 * 0.24'

const missingParenthesisPosition = findMissingParenthesis(expression)

console.log(`The missing parenthesis is at position: ${missingParenthesisPosition}`)


