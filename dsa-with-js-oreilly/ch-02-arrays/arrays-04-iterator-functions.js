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

  function isOdd(num) {
    return num % 2 !== 0
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
  // map()
  function curve(grade) {
    return grade += 5
  }

  const grades = [77, 65, 81, 92, 83]
  let new_grades = grades.map(curve)

  console.log('new grades', new_grades)

  let words = [
    'For',
    'Your',
    'Information',
  ]
  let acronym = words.map(word => word[0])

  console.log(acronym.join(''))

  // filter()
  let nums5 = []

  for (let i = 0; i < 20; ++i) {
    nums5[i] = i + 1
  }

  let evenNums = nums5.filter(isEven)
  let oddNums = nums5.filter(isOdd)

  console.log('Even numbers:', evenNums)
  console.log('Odd numbers:', oddNums)

  let random_grades = []

  for (let i = 0; i < 20; ++i) {
    random_grades[i] = Math.floor(Math.random() * 101)
  }

  let pass_grades = random_grades.filter(num => num >= 60)

  console.log('All grades:', random_grades)
  console.log('Passing grades:', pass_grades)

  // i before e except after c
  var rule_words = [
    'recieve',
    'deceive',
    'percieve',
    'deceit',
    'concieve',
  ]
  var misspelled = rule_words.filter(str => {
    if (str.indexOf('cie') > -1) {
      return true
    }

    return false
  })

  console.log('misspelled', misspelled)

})()

