class WeekTemps {
  constructor() {
    this.temp = []
  }

  add(tempData) {
    this.temp.push(tempData)
  }

  avg() {
    if (this.temp.length === 0) {
      return 'No temperature available.'
    }

    const sum = this.temp.reduce((total, tempData) => total + tempData, 0)
    const average = sum / this.temp.length

    return average.toFixed(2)
  }
}

const thisWeek = new WeekTemps()

thisWeek.add(52)
thisWeek.add(55)
thisWeek.add(61)
thisWeek.add(65)
thisWeek.add(55)
thisWeek.add(50)
thisWeek.add(52)
thisWeek.add(49)

console.log(thisWeek.avg())

