(function() {
  /*
   * Non-Array generating iterator functions
   * */
  // forEach()
  function square(num) {
    console.log(num, num * num)
  }

  let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  nums1.forEach(square)

  // every(): if every element returns true
  function isEven(num) {
    return num % 2 === 0
  }

  let nums2 = [2, 4, 6, 8, 10, 5]
  let even = nums2.every(isEven)

  even
    ? console.log('all numbers are even')
    : console.log('not all numbers are evern')

  // some(): if at least one returns true

  let some_even = nums2.some(isEven)

  some_even
    ? console.log('some numbers are even')
    : console.log('no numbers are evern')

  let nums3 = [1, 3, 5, 7, 9]
  let no_even = nums3.every(isEven)

  no_even
    ? console.log('some numbers are even')
    : console.log('no numbers are evern')

  // Additional examples
  const widgets = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'teal' },
  ]

  console.log('blue', widgets.some(item => item.color === 'blue'))
  console.log('all blue', widgets.every(item => item.color === 'blue'))

  // reduce()
  function add(runningTotal, currentValue) {
    return runningTotal + currentValue
  }

  var sum = nums1.reduce(add)

  console.log('sum', sum)

  // Additional examples
  const nums4 = [2, 7, 5, 10]
  const val = 0;
  const sum2 = nums4.reduce((accumulator, currentValue) => {
    let result = accumulator + currentValue;

    return result;
  }, val)

  console.log('sum2', sum2)

  /*
   * iterator functions that return a new array
   * */
  // 
})()

