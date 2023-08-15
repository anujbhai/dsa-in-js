class Node {
  constructor(val) {
    this.left = null
    this.right = null
    this.val = val
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)

    if (this.root === null) {
      this.root = newNode
    } else {

    }
  }

  lookup(val) { }

  remove(val) { }
}

const tree = new BinarySearchTree()

tree.insert(9)

/*tree.insert(Math.floor(Math.random() * 100) + 1)
tree.insert(Math.floor(Math.random() * 100) + 1)
tree.insert(Math.floor(Math.random() * 100) + 1)
tree.insert(Math.floor(Math.random() * 100) + 1)
tree.insert(Math.floor(Math.random() * 100) + 1)
tree.insert(Math.floor(Math.random() * 100) + 1)*/

console.log(JSON.stringify(traverse(tree.root)))

function traverse(node) {
  const traverseTree = { val: node.val }

  traverseTree.left = node.left === null ? null : traverse(node.left)
  traverseTree.right = node.right === null ? null : traverse(node.right)

  return traverseTree
}

