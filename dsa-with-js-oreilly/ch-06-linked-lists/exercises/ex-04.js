class Node {
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insert(element) {
    const newNode = new Node(element)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  remove(element) {
    let current = this.head

    while (current) {
      if (current.element === element) {
        if (current.prev) {
          current.prev.next = current.next
        } else {
          this.head = current.next
        }

        if (current.next) {
          current.next.prev = current.prev
        } else {
          this.tail = current.prev
        }

        return
      }

      current = current.next
    }
  }

  findLastNode() {
    return this.tail
  }

  dispReverse() {
    let current = this.tail
    console.log('Doubly linked list in reverse order:')

    while (current) {
      console.log(current.element)
      current = current.prev
    }
  }

  display() {
    let current = this.head
    console.log('Doubly linked list:')

    while (current) {
      console.log(current.element)
      current = current.next
    }
  }
}

const list = new DoublyLinkedList()

list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)

list.display()
list.dispReverse()

