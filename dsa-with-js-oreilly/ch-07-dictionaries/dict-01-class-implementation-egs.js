const Dictionary = require('./dict-01-class-implementation')

const phonebook = new Dictionary()

phonebook.add('Raymond', '123')
phonebook.add('David', '345')
phonebook.add('Cynthia', '456')
phonebook.add('Mike', '723')
phonebook.add('Jennifer', '987')
phonebook.add('Danny', '012')
phonebook.add('Jonathan', '666')

phonebook.showAll()

console.log(`Nummber of entries: ${phonebook.size()}`)
console.log(`David's extension: ${phonebook.get('David')}`)

phonebook.remove('David')

phonebook.showAll()
phonebook.clear()
console.log(`Nummber of entries: ${phonebook.size()}`)


