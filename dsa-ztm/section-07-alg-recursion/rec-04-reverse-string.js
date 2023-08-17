// 1 converting string to array
function revStr(str) {
  let strArr = str.split("")
  let revArr = []

  function addToArray(arr) {
    if (arr.length > 0) {
      revArr.push(arr.pop())
      addToArray(arr)
    }

    return
  }

  addToArray(strArr)

  return revArr.join('')
}

console.log(revStr('yoyo master'))

// 1 using built in string methods
function revStrRecursive(str) {
  if (str === '') {
    return ''
  } else {
    return revStrRecursive(str.substr(1)) + str.charAt(0)
  }
}

console.log(revStrRecursive('yoyo master'))

