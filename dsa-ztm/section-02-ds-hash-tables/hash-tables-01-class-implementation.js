class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  set(key, value) {
    let pos = this._hash(key)

    if (!this.data[pos]) {
      this.data[pos] = []
    }

    this.data[pos].push([key, value])
    console.log(this.data)

    return this.data
  }

  get(key) {
    let pos = this._hash(key)

    const current = this.data[pos]

    if (current) {
      for (let i = 0; i < current.length; i++) {
        if (current[i][0] === key) {
          console.log(current[i][1])
          return current[i][1]
        }
      }
    }

    return undefined
  }

  // iterate through all items
  keys() {
    if (!this.data.length) {
      return undefined
    }

    const keysArr = []

    for (let i = 0; i < this.data.length; i++) {
      // if not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // loop through all potential collisions
        if (this.data.length < 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArr.push(this.data[i][j][0])
          }
        } else {
          keysArr.push(this.data[i][0])
        }
      }
    }

    console.log('keys array:', keysArr)

    return keysArr
  }
}

const hTable = new HashTable(50)

hTable.set('grapes', 10000)
hTable.set('apples', 52)
hTable.set('oranges', 2)
hTable.get('apples')
hTable.keys()
