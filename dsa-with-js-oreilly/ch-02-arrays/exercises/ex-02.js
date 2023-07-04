class WordList {
  constructor() {
    this.words = []
  }

  addWord(word) {
    this.words.push(word)
  }

  displayForward() {
    console.log(`Words forward: ${this.words.join(' ')}`)
  }

  displayBackward() {
    console.log(`Words backward: ${this.words.reverse().join(' ')}`)
    this.words.reverse()
  }
}

const myWordList = new WordList()

myWordList.addWord('Hello')
myWordList.addWord('World')
myWordList.addWord('Bastab')

myWordList.displayForward()
myWordList.displayBackward()

