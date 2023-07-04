class Grades {
  constructor() {
    this.grades = []
  }

  addGrade(grade) {
    this.grades.push(grade)
  }

  calculateAverage() {
    if (this.grades.length === 0) {
      return 'No grades available.'
    }

    const sum = this.grades.reduce((callbackFn, initVal) => callbackFn + initVal, 0)
    const avg = sum / this.grades.length

    return avg.toFixed(2)
  }
}

const myGrades = new Grades()

myGrades.addGrade(85)
myGrades.addGrade(92)
myGrades.addGrade(78)

console.log(`Grades: ${myGrades.grades}`)
console.log(`Average: ${myGrades.calculateAverage()}`)

