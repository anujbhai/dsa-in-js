(function() {
  const readline = require('readline')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  // rl.question('Enter a name to search for: ', processedOutput())

  /*
   * Searching for a value
   * */
  const names = [
    'James',
    'Mike',
    'David',
    'Cynthia',
    'Raymond',
    'Clayton',
    'Mike',
    'Jennifer',
  ]

  function processedOutput() {
    return (name) => {
      let position = names.indexOf(name)

      if (position >= 0) {
        console.log(`Found ${name} at position ${position}.`)
      } else {
        console.log(`${name} not found in array.`)
      }

      // const keywordItem = 'Mike'

      let firstPos = names.indexOf(name)
      let lastPos = names.lastIndexOf(name)

      console.log(`first found ${name} at posiiton ${firstPos}`)
      console.log(`last found ${name} at posiiton ${lastPos}`)

      rl.close()
    }
  }

  /*
   * Creating new arrays from existing array
   * */
  const cisDept = ['Mike', 'Clayton', 'Terrill', 'Danny', 'Jennifer']
  const dmpDept = ['Raymond', 'Cynthia', 'Bryan']

  let itDiv = dmpDept.concat(cisDept)

  console.log(itDiv)

  const dmpDept2 = itDiv.splice(3, 3)
  const cisDept2 = itDiv

  console.log(dmpDept2)
  console.log(cisDept2)
})()

