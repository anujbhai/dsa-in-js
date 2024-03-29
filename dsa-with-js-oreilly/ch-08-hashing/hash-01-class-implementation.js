class HashTable {
  constructor() {
    this.table = new Array(137)
  }

  // simple hash function
  hash(key) {
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }

    console.log(`Hash value: ${key} -> ${hash}`)

    return hash % this.table.length
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

const names = [
  'David',
  'Jennifer',
  'Donnie',
  'Raymond',
  'Cynthia',
  'Mike',
  'Clayton',
  'Danny',
  'Jonathan'
]
const hTable = new HashTable()

for (let i = 0; i < names.length; i++) {
  hTable.put(names[i])
}

hTable.showDistro()

