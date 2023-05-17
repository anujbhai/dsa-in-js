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
})()

