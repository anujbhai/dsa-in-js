class LetterArray {
  constructor() {
    this.letters = []
  }

  addLetter(letter) {
    this.letters.push(letter)
  }

  displayAsWord() {
    return this.letters.join('')
  }
}

const letterArray = new LetterArray()

letterArray.addLetter('H')
letterArray.addLetter('e')
letterArray.addLetter('l')
letterArray.addLetter('l')
letterArray.addLetter('o')

console.log('Letters:', letterArray.letters)
console.log('Word::', letterArray.displayAsWord())

