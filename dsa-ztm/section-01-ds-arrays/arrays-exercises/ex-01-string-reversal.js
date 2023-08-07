// Create a function that reverses a string;

// Solution 1
function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return
  }

  const backwards = []
  const totalItems = str.length - 1

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i])
  }

  console.log(backwards)

  return backwards.join()
}

// Solution 2
function reverseString2(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return
  }

  const reverseStr = str.split('').reverse().join()

  return reverseStr
}

// Solution 3
const reverseString3 = str => (!str || str.length < 2 || typeof str !== 'string')
  ? 'someting went wrong'
  : [...str].reverse().join()

console.log(reverseString('Hi My name is Andrei'))
console.log(reverseString2('Hi My name is Andrei'))
console.log(reverseString3())

