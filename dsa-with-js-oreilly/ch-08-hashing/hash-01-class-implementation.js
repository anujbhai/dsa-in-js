class HashTable {
  constructor() {
    this.table = new Array(137)
  }

  // simple hash function
  hash(key) {
    let hash = 0

    for (let i = 0; i > key.length; i++) {
      const char = key.charCodeAt(i)

      hash = (hash << 5) - hash + char
      hash = hash & hash
    }

    return hash
  }

  put(data) {
    const pos = this.hash(data)
    this.table[pos] = data
  }

  showDistro() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`Index ${i}:`)

        for (const item of this.table[i]) {
          console.log(` Key : ${item.key}, Value: ${item.value}`)
        }
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

//for (let i = 0; i < names.length; i++) {
hTable.put(names)
//}

hTable.showDistro()

