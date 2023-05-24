(function() {
  /*
   * 2d arrays
   * */
  Array.matrix = function(numrows, numcols, initial) {
    let arr = [];

    for (let i = 0; i < numrows; ++i) {
      let columns = []

      for (let j = 0; j < numcols; ++j) {
        columns[j] = initial
      }

      arr[i] = columns
    }

    return arr
  }

  let nums = Array.matrix(5, 5, 0)
  console.log(nums)

  let stars = Array.matrix(3, 3, '*')
  console.log(stars)

  // Processing 2d arrays
  let grades = [
    [89, 77, 78],
    [76, 82, 81],
    [91, 94, 89],
  ]
  let total = 0
  let avg = 0.0

  // row computation
  for (let i = 0; i < grades.length; ++i) {
    for (let j = 0; j < grades[i].length; ++j) {
      total += grades[i][j]
    }

    avg = total / grades[i].length

    console.log(`Student ${parseInt(i + 1)} average: ${avg.toFixed(2)}`)

    total = 0
    avg = 0.0
  }

  // column computation
  for (let i = 0; i < grades.length; ++i) {
    for (let j = 0; j < grades[i].length; ++j) {
      total += grades[j][i]
    }

    avg = total / grades[i].length

    console.log(`Test ${parseInt(i + 1)} average: ${avg.toFixed(2)}`)

    total = 0
    avg = 0.0
  }

  // jagged arrays
  let jagged_grades = [
    [89, 77],
    [76, 82, 81],
    [91, 94, 89, 99]
  ]

  for (let i = 0; i < jagged_grades.length; ++i) {
    for (let j = 0; j < jagged_grades[i].length; ++j) {
      total += jagged_grades[i][j]
    }

    avg = total / jagged_grades[i].length

    console.log(`Student ${parseInt(i + 1)} average: ${avg.toFixed(2)}`)

    total = 0
    avg = 0.0
  }

})()

