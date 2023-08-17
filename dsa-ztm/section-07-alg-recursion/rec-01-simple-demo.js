let count = 0

function inception() {
  if (count > 3) {
    console.log('Done')
    return
  }

  count++

  return inception()
}
inception()

