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

  /*
  * removing element 
  * */
  // from the beginning of an array with pop()
  let nums5 = [9, 1, 2, 3, 4, 5]

  nums5.pop()

  console.log('nums5:', nums5)

  // at the end of the array using shift()
  let nums6 = [6, 1, 2, 3, 4, 5]

  nums6.shift()
  console.log('nums6', nums6)

  nums6.unshift(6)
  console.log('nums6', nums6)

  let first = nums6.shift()

  nums6.push(first)
  console.log('nums6', nums6)

})()

