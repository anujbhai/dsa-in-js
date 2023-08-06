// JavaScript classes example
class Player {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  introduce() {
    console.log(`Hi I am ${this.name}. I am a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }

  play() {
    console.log(`WEEEE I am a ${this.type}`)
  }
}

const wiz1 = new Wizard('Volodymir', 'Dictator')
const wiz2 = new Wizard('Rahul', 'Convict')

wiz1.introduce()
wiz1.play()

wiz2.introduce()
wiz2.play()

