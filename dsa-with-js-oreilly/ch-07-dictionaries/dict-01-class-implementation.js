class Dictionary {
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

  showAll() {
    for (const [key, value] of this.map.entries()) {
      console.log(`${key}: ${value}`)
    }
  }
}

const phonebook = new Dictionary()

phonebook.add('Mike', '123')
phonebook.add('David', '345')
phonebook.add('Cynthia', '456')

console.log(`David's extension: ${phonebook.get('David')}`)

phonebook.remove('David')

phonebook.showAll()

