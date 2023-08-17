// Write function that finds the factorial of any number.

// Recursive
function findFactorialRecursively(num) {
  if (num === 2) {
    return 2
  }

  let answer = num * findFactorialRecursively(num - 1)

  return answer
}
console.log(findFactorialRecursively(5))

// Iterative
function findFactorialIteratively(num) {
  let answer = 1

  if (num === 2) {
    answer = 2
  }

  for (let i = 2; i <= num; i++) {
    answer = answer * i
  }

  return answer
}
console.log(findFactorialIteratively(5))

