const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(arr, lt, rt) {
  // const length = arr.length
  let pivot;
  let partitionIndex;

  if (lt < rt) {
    pivot = rt;
    partitionIndex = partition(arr, pivot, lt, rt);

    // sort left/right
    quickSort(arr, lt, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, rt);
  }

  return arr;
}

function partition(arr, pivot, lt, rt) {
  let pivotVal = arr[pivot];
  let partitionIndex = lt;

  for (let i = lt; i < rt; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, rt, partitionIndex);
  return partitionIndex;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = temp;
}

quickSort(nums, 0, nums.length - 1);
console.log(nums);
