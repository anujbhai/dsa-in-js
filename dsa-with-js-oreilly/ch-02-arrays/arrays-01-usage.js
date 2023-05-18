(function() {
  /*
   * Access and write array elements
   * */
  var nums = [1, 2, 3, 5, 8, 13, 21]
  var sum = 0

  for (var i = 0; i < nums.length; ++i) {
    sum += nums[i]
  }
  console.log(sum)

  /*
   * array from strings using split()
   * */
  var sentence = 'the quick brown fox jumps over the lazy dog.'
  var words = sentence.split(' ')

  for (var i = 0; i < words.length; ++i) {
    console.log('word: ' + i + ': ' + words[i])
  }

  /* 
   * Aggrage array operations
   * */
  var nums = []

  for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1
  }

  // shallow copy
  var samenums = nums
  nums[0] = 40
  console.log(samenums[0])

  // deep copy
  function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
      arr2[i] = arr1[i]
    }
  }

  var nums_copy = []

  for (var i = 0; i < 100; ++i) {
    nums_copy[i] = i + 1
  }

  var samenums_copy = []

  copy(nums_copy, samenums_copy)

  nums_copy[0] = 400

  console.log(samenums_copy[0])
})()

