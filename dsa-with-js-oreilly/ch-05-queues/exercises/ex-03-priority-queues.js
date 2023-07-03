const PriorityQueue = require('./priority-queue')

class Patient {
  constructor(name, code) {
    this.name = name
    this.code = code
  }
}

let p = new Patient('Smith', 5)
const pq = new PriorityQueue()
pq.enqueue(p)

p = new Patient('Jones', 4)
pq.enqueue(p)


p = new Patient('Fahrenbach', 6)
pq.enqueue(p)


p = new Patient('Brown', 4)
pq.enqueue(p)

p = new Patient('Ingram', 4)
pq.enqueue(p)

console.log(pq.toString())

let seen = pq.dequeue()

console.log(`Patient being treated: ${seen[0].name}`)
console.log(`Patients waiting to be seen: ${pq.toString()}`)

seen = pq.dequeue()

console.log(`Patient being treated: ${seen[0].name}`)
console.log(`Patients waiting to be seen: ${pq.toString()}`)

seen = pq.dequeue()

console.log(`Patient being treated: ${seen[0].name}`)
console.log(`Patients waiting to be seen: ${pq.toString()}`)


