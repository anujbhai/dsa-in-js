module.exports = class Dictionary {
  constructor() {
    this.map = new Map()
  }

  add(key, value) {
    this.map.set(key, value)
  }

  get(key) {
    return this.map.get(key)
  }

  remove(key) {
    this.map.delete(key)
  }

  size() {
    return this.map.size
  }

  clear() {
    this.map.clear()
  }

  showAll() {
    const sorted = Array.from(this.map.entries()).sort((a, b) => {
      // ascending order
      return a[0] < b[0] ? -1 : 1
    })

    for (const [key, value] of sorted) {
      console.log(`${key}: ${value}`)
    }
  }
}

