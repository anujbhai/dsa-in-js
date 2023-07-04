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

class TempTracker {
  constructor() {
    this.monthlyTemp = []
  }

  addWeeklyTemp(weekTempData) {
    this.monthlyTemp.push(weekTempData)
  }

  monthlyAvg() {
    if (this.monthlyTemp.length === 0) {
      return 'No data available.'
    }

    // const totalWeeks = this.monthlyTemp.length
    const totalTemp = this.monthlyTemp.flat().length
    const sum = this.monthlyTemp.flat().reduce((total, temperature) => total + temperature, 0)
    const average = sum / totalTemp

    return average.toFixed(2)
  }

  weeklyAvg(weekNo) {
    if (weekNo < 1 || weekNo > this.monthlyTemp.length) {
      return 'Invalid week number.'
    }

    const weekTemp = this.monthlyTemp[weekNo - 1]
    const totalTemp = weekTemp.length
    const sum = weekTemp.reduce((total, temperature) => total + temperature, 0)
    const average = sum / totalTemp

    return average.toFixed(2)
  }

  totalWeeklyAvg() {
    if (this.monthlyTemp.length === 0) {
      return 'No data available.'
    }

    const weeklyAvgs = this.monthlyTemp.map((weekTemps, index) => {
      const totalTemps = weekTemps.length
      const sum = weekTemps.reduce((total, temperature) => total + temperature, 0)

      return sum / totalTemps
    })

    return weeklyAvgs.map((average, index) => `Week ${index + 1}: ${average.toFixed(2)}`).join('\n')
  }
}

const monthlyTemps = new TempTracker()

monthlyTemps.addWeeklyTemp([28, 30, 32, 29, 31])
monthlyTemps.addWeeklyTemp([25, 26, 27, 28, 29])
monthlyTemps.addWeeklyTemp([30, 31, 32, 33, 34])

console.log('Monthly Temperatures:', monthlyTemps.monthlyTemp)
console.log('Monthly Average:', monthlyTemps.monthlyAvg())
console.log('Monthly Temperatures:', monthlyTemps.weeklyAvg(2))
console.log('Monthly Temperatures:', monthlyTemps.totalWeeklyAvg())

