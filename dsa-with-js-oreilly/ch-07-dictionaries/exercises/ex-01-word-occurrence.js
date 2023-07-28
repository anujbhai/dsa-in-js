// const Dictionary = require('../dict-01-class-implementation')
class Dictionary {
  constructor() {
    this.map = new Map()
  }

  add(key) {
    const count = this.map.get(key) || 0
    this.map.set(key, count + 1)
  }

  showAll() {
    const sortedEntries = Array.from(this.map.entries()).sort((a, b) => {
      return a[0].localeCompare(b[0])
    })
    for (const [key, value] of sortedEntries) {
      console.log(`${key}: ${value}`)
    }
  }
}

function countWordOccurrences(text) {
  const words = text.toLowerCase().split(/\s+/)
  const wordCount = new Dictionary()

  for (const word of words) {
    wordCount.add(word)
  }

  return wordCount;
}

const text = 'She sells sea shells on the sea shore.'
const wordOccurrences = countWordOccurrences(text)

wordOccurrences.showAll()

