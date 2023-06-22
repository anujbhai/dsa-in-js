const Queue = require('../queues-01-class-implementation')

function distribute(nums, queues, n, digit) {
  for (let i = 0; i < n; i++) {
    if (digit === 1) {
      queues[nums[i] % 10].enqueue(nums[i])
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
    }
  }
}

function collect(queues, nums) {
  var i = 0;

  for (let digit = 0; digit < 10; digit++) {
    while (!queues[digit].isEmpty()) {
      nums[i++] = queues[digit].dequeue()
    }
  }
}

function displayArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} `)
  }
}

// test program
const queues = []

for (let i = 0; i < 10; i++) {
  queues[i] = new Queue()
}

var nums = []

for (let i = 0; i < 10; i++) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101))
}

console.log('Before radix sort:')

displayArr(nums)
distribute(nums, queues, 10, 1)
collect(queues, nums)

distribute(nums, queues, 10, 10)
collect(queues, nums)

console.log('Before radix sort:')

displayArr(nums)

