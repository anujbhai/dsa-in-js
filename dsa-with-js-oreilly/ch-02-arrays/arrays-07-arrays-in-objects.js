(function() {
  /*
   *
   * */
  function weekTemps() {
    this.datastore = []
    this.add = add
    this.avg = avg
  }

  function add(temp) {
    this.datastore.push(temp)
  }

  function avg() {
    let total = 0

    for (let i = 0; i < this.datastore.length; ++i) {
      total += this.datastore[i]
    }

    return total / this.datastore.length
  }

  let thisWeek = new weekTemps()

  thisWeek.add(52)
  thisWeek.add(55)
  thisWeek.add(61)
  thisWeek.add(65)
  thisWeek.add(55)
  thisWeek.add(50)
  thisWeek.add(52)
  thisWeek.add(49)

  console.log(thisWeek.avg())
})()

