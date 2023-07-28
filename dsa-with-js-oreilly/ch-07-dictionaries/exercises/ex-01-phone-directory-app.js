const Dictionary = require('../dict-01-class-implementation')
const fs = require('fs')

function readPhoneBook(filename) {
  const phonebook = new Dictionary()
  const data = fs.readFileSync(filename, 'utf-8')
  const lines = data.split('\n')

  console.log('Reading data from file...')

  for (const line of lines) {
    const [name, phoneNumber] = line.split(': ')

    if (name && phoneNumber) {
      phonebook.add(name, phoneNumber)
    }
  }

  return phonebook
}

console.log('.. initializing phonebook')
const file = 'phonebook.txt'
const phonebook = readPhoneBook(file)

console.log('displaying all phone numbers')
phonebook.showAll()

console.log('\nAdding new entry')
phonebook.add('David', '5551234567')

console.log('\nUpdated phone book')
phonebook.showAll()

console.log('\nRemoving an entry')
phonebook.remove('David')

console.log('\nUpdated phone book')
phonebook.showAll()

console.log('\nFinding an entry')
const findBaba = phonebook.get('Baba')
console.log('Baba\'s Number: ', findBaba)

console.log('\nClearing all entries')
phonebook.clear()
phonebook.showAll()

