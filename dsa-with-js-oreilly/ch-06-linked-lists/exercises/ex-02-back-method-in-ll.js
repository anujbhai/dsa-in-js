class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.current = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  remove(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.current = this.head;
      return;
    }

    let current = this.head;
    let prev = null;
    while (current) {
      if (current.data === data) {
        prev.next = current.next;
        if (this.current === current) {
          this.current = prev.next;
        }
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  advance(n) {
    if (n <= 0 || !this.current) {
      return;
    }
    let steps = n;
    let current = this.current;
    while (current && steps > 0) {
      current = current.next;
      steps--;
    }
    this.current = current;
  }

  back(n) {
    if (n <= 0 || !this.current) {
      return;
    }
    let steps = n;
    let current = this.head;
    let prev = null;
    while (current && steps > 0) {
      prev = current;
      current = current.next;
      steps--;
    }
    this.current = prev;
  }

  show() {
    if (this.current) {
      console.log(this.current.data);
    } else {
      console.log("No current node selected.");
    }
  }
}

const list = new SinglyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.show(); // Output: 1

list.advance(2);
list.show(); // Output: 3

list.prepend(0);
list.show(); // Output: 0

list.remove(2);
list.show(); // Output: 3

list.back(2);
list.show(); // Output: 1
