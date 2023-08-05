const readline = require('readline')
// const rl = readline.createInterface(process.stdin, process.stdout)

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

function getUserInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close()

      resolve(answer)
    })
  })
}

async function main() {
  const hTable = new HashTable()

  for (let i = 0; i < 3; i++) {
    const name = await getUserInput(`Enter name ${i + 1}: `)
    const phNumber = await getUserInput(`Enter phone number for ${name}: `)

    hTable.put(name, phNumber)
  }

  console.log('\nData stored in hash table')
  hTable.showDistro()

  let retrieveName;

  while (retrieveName !== 'quit') {
    retrieveName = await getUserInput('/nEnter a name to retrieve the phone number (or <quit> to exit)')

    if (retrieveName !== 'quit') {
      const phNumber = hTable.get(retrieveName)

      if (phNumber !== undefined) {
        console.log(`Phone number for ${retrieveName}: ${phNumber}`)
      } else {
        console.log(`No phone number found for ${retrieveName}.`)
      }
    }
  }

  console.log('Goodbye!')
}

main()



