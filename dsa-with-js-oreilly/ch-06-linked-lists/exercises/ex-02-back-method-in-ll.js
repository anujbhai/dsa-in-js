class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.current = null; // Track the current node
  }

  isEmpty() {
    return this.head === null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.current = newNode; // Set the current node to the newly inserted node
    } else {
      this.current.next = newNode;
      this.current = newNode; // Update the current node to the newly inserted node
    }
  }

  advance(n) {
    let count = 0;
    while (count < n && this.current !== null) {
      this.current = this.current.next;
      count++;
    }
  }

  back(n) {
    let count = 0;
    let curr = this.current;

    // Traverse n nodes backward from the current node
    while (count < n && curr !== null) {
      curr = this.findPreviousNode(curr);
      count++;
    }

    // Update the current node
    this.current = curr;
  }

  findPreviousNode(node) {
    let current = this.head;
    while (current && current.next !== node) {
      current = current.next;
    }
    return current;
  }

  toString() {
    if (this.isEmpty()) {
      return "LinkedList: Empty";
    } else {
      let result = "LinkedList: ";
      let current = this.head;
      while (current !== null) {
        result += current.data + " -> ";
        current = current.next;
      }
      result += "null";
      return result;
    }
  }
}

// Example usage
const linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);

console.log("Initial List:");
console.log(linkedList.toString());

linkedList.advance(2); // Move current node 2 nodes forward

console.log("After advancing 2 nodes:");
console.log(linkedList.toString());

linkedList.back(1); // Move current node 1 node backward

console.log("After moving 1 node backward:");
console.log(linkedList.toString());


