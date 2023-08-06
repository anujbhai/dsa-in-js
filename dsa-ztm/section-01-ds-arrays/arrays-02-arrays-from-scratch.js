class CustomArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++

    return this.length
  }

  pop() {
    const last_item = this.data[this.length - 1]

    delete this.data[this.length - 1]
    this.length--

    return last_item
  }

  delete(index) {
    const item = this.data[index]

    this.shiftItems(index)

    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]
    this.length--
  }
}

const arr1 = new CustomArray()

arr1.push('Hi')
arr1.push('there')
arr1.push('!')
//arr1.delete(1)
arr1.push('whats')
arr1.push('up')
arr1.push('buddy')
arr1.delete(1)

console.log(arr1)

