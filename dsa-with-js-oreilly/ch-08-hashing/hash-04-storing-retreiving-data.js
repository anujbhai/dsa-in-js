const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

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

  put(key, data) {
    const pos = this.hash(data)
    this.table[pos] = data
  }

  get(key) {
    return this.table[this.hash(key)]
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

const phNums = new HashTable()
let name = ''
let phNum = ''

for (var i = 0; i < 3; i++) {
  name = rl.question('Enter a name (space to quit): ')
  phNum = rl.question('Enter a number: ')
}

name = ''

while (name !== 'quit') {
  // @TODO - assign typed name as prompt input
  name = rl.question('Name for number (Enter <quit> to stop): ')

  if (name = 'quit') {
    break;
  }

  console.log(`${name}'s number is ${phNums.get(name)}`)
  rl.question('Name of number (Enter <quit> to stop): ')
  // rl.close()
}



