function fibIterative(n) {
  let arr = [0, 1]

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }

  return arr[n]
}
console.log(fibIterative(3))

function fibRecursive(n) {
  if (n < 2) {
    return n
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2)
}
console.log(fibRecursive(2))

