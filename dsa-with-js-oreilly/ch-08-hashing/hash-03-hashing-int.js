class HashTable {
  constructor() {
    this.table = new Array(137)
  }

  // simple hash function
  hash(key) {
    const H = 137
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      hash += H * hash + key.charCodeAt(i)
    }

    hash = hash % this.table.length

    if (hash < 0) {
      hash += this.table.length - 1
    }

    return parseInt(hash)
  }

  put(data) {
    const pos = this.hash(data)
    this.table[pos] = data
  }

  showDistro() {
    let n = 0

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ": " + this.table[i])
      }
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function genStudentData(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = ''

    for (let j = 1; j <= 9; j++) {
      num += Math.floor(Math.random() * 10)
    }

    num += getRandomInt(50, 100)
    arr[i] = num
  }
}

const numStudents = 10
const arrSize = 97
const idLen = 9
const students = new Array(numStudents)

genStudentData(students)

console.log('Student data: \n')

for (let i = 0; i < students.length; i++) {
  console.log(students[i].substring(0, 8) + ' ' + students[i].substring(9))
}

console.log('\n\nData distribution: \n')

const hTable = new HashTable()

for (let i = 0; i < students.length; i++) {
  hTable.put(students[i])
}

hTable.showDistro()



