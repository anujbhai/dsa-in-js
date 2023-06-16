const Stack = require('./utilStack')
/*
* A postfix expression evaluator works on arithmetic expressions taking the following
form:
op1 op2 operator
Using two stacks—one for the operands and one for the operators—design and
implement a JavaScript function that converts infix expressions to postfix expres‐
sions, and then use the stacks to evaluate the expression.
* */

function infixToPostfix(exp) {
  const ops = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '(': 0
  }

  const operandStack = new Stack()
  const operatorStack = new Stack()

  const isOperator = char => {
    return ops.hasOwnProperty(char)
  }

  const hasHigherPrecedence = (op1, op2) => {
    return ops[op1] >= ops[op2]
  }

  const evaluateOperation = operator => {
    const operand2 = operandStack.pop()
    const operand1 = operandStack.pop()

    switch (operator) {
      case '+':
        operandStack.push(operand1 + operand2)
        break;
      case '-':
        operandStack.push(operand1 - operand2)
        break;
      case '*':
        operandStack.push(operand1 * operand2)
        break;
      case '/':
        operandStack.push(operand1 / operand2)
        break;
    }
  }

  for (let i = 0; i < exp.length; i++) {
    const char = exp[i]

    if (char === ' ') {
      continue
    } else if (isOperator(char)) {
      while (!operatorStack.isEmpty() && hasHigherPrecedence(operatorStack.peek(), char)) {
        const topOp = operatorStack.pop()
        evaluateOperation(topOp)
      }

      operatorStack.push(char)
    } else if (char === '(') {
      operatorStack.push(char)
    } else if (char === ')') {
      while (!operatorStack.isEmpty() && operatorStack.peek() !== '(') {
        const topOp = operatorStack.pop()

        evaluateOperation(topOp)
      }

      operatorStack.pop() // Discard the opening parenthesis
    } else {
      // operand
      operandStack.push(parseFloat(char))
    }
  }

  while (!operatorStack.isEmpty()) {
    const topOp = operatorStack.pop()

    evaluateOperation(topOp)
  }

  return operandStack.pop()
}

const infixExp = '2 + 3 * 4'
const postfixExp = infixToPostfix(infixExp)
console.log(`Post fix expression: ${postfixExp}`)

function evaluatePostfix(exp) {
  const stack = new Stack()

  for (let i = 0; i < exp.length; i++) {
    const char = exp[i]

    if (!isNaN(char)) {
      stack.push(parseFloat(char))
    } else {
      const operand2 = stack.pop()
      const operand1 = stack.pop()

      switch (char) {
        case '+':
          stack.push(operand1 + operand2)
          break;
        case '-':
          stack.push(operand1 - operand2)
          break;
        case '*':
          stack.push(operand1 * operand2)
          break;
        case '/':
          stack.push(operand1 / operand2)
          break;
      }
    }
  }

  return stack.pop()
}

// const postfixExp2 = '23 4 * +'
const result = evaluatePostfix(infixExp)
console.log(`Result: ${result}`)

