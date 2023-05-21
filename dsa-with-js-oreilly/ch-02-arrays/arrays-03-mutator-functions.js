(function() {
  /*
  * Adding elements
  * */
  // using push() to extend an array
  const nums1 = [1, 2, 3, 4, 5]

  console.log(nums1)

  nums1.push('six')

  console.log(nums1)

  // using length to extend an array
  const nums2 = [1, 2, 3, 4, 5]

  console.log(nums2)

  nums2[nums2.length] = 'six'

  console.log(nums2)

  /*
  * adding data to the beginning of an array
  * */
  // This code becomes inefficient as the number of elements stored in the array increases.
  const nums3 = [2, 3, 4, 5]

  let newnum = 1
  let N = nums3.length

  for (var i = N; i >= 0; --i) {
    nums3[i] = nums3[i - 1]
  }

  nums3[0] = newnum

  console.log(nums3)

  // using unshift() to add elements at the beginning of an array
  let nums4 = [2, 3, 4, 5]

  nums4.unshift(newnum)

  console.log(nums4)

  nums4 = [3, 4, 5]

  nums4.unshift(newnum, 1, 2)

  console.log(nums4)
})()

