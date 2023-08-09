const HashTable = require('./hash_table')

function firstRecurringChar(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        console.log(input[i])
        return input[i]
      }
    }
  }

  console.log('undef')
  return undefined
} // log O(n^2)

function firstRecurringChar2(input) {
  let map = {}

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      console.log(input[i])
      return input[i]
    } else {
      map[input[i]] = i
    }

    console.log(map)
  }

  return undefined
} // log O(n)

firstRecurringChar2([2, 5, 1, 2, 3, 5, 1, 2, 4])

