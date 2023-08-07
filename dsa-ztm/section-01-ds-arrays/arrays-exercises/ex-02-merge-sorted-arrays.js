function mergeSortedArrays(a1, a2) {
  const mergedArray = []

  let arr1Item = a1[0]
  let arr2Item = a2[0]
  let i = 1;
  let j = 1;

  if (a1.length === 0) {
    return a2
  }

  if (a2.length === 0) {
    return a1
  }

  while (arr1Item || arr2Item) {
    // console.log(arr1Item, arr2Item)
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item)
      arr1Item = a1[i]
      i++
    } else {
      mergedArray.push(arr2Item)
      arr2Item = a2[j]
      j++
    }
  }

  return mergedArray
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))

