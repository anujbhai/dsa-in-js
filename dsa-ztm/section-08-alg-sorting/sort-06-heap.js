// util fn to heapify a subtree rooted at index 1
// n = array size
function heapify(arr, n, i) {
  let largest = i // root
  const left = 2 * i + 1
  const right = 2 * i + 2

  // left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left
  }

  // right child is larger than largest
  if (right < n && arr[right] > arr[largest]) {
    largest = right
  }

  // largets is not root
  if (largest !== i) {
    // swap
    const temp = arr[i]

    arr[i] = arr[largest]
    arr[largest] = temp

    heapify(arr, n, largest)
  }
}

function heapSort(arr) {
  const n = arr.length

  for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }

  // extract elements one by one from heap
  for (let i = n - 1; i > 0; i--) {
    // move current root to the end
    const temp = arr[0]

    arr[0] = arr[i]
    arr[i] = temp

    heapify(arr, i, 0)
  }
}

const arr = [12, 11, 13, 5, 6, 8]

console.log(`Original array: ${arr}`)
heapSort(arr)
console.log(`Sorted array: ${arr}`)

