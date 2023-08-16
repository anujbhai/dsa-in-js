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
      let currentNode = this.root

      while (true) {
        if (val < currentNode.val) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }

          currentNode = currentNode.left
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }

          currentNode = currentNode.right
        }
      }
    }
  }

  lookup(val) {
    if (!this.root) {
      console.log('Value does not exit in the BST')
    }

    let currentNode = this.root // root is always the entry point

    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left
      } else if (val > currentNode.val) {
        currentNode = currentNode.right
      } else if (val === currentNode.val) {
        return currentNode
      }
    }

    return false
  }

  remove(val) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (val < currentNode.val) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.val === val) {
        //We have a match, get to work!

        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current val, make current left child a child of parent
            if (currentNode.val < parentNode.val) {
              parentNode.left = currentNode.left;

              //if parent < current val, make left child a right child of parent
            } else if (currentNode.val > parentNode.val) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if (currentNode.val < parentNode.val) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.val > parentNode.val) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.val < parentNode.val) {
              parentNode.left = leftmost;
            } else if (currentNode.val > parentNode.val) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree()

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.remove(170)

console.log(JSON.stringify(traverse(tree.root)))

function traverse(node) {
  const traverseTree = { val: node.val }

  traverseTree.left = node.left === null ? null : traverse(node.left)
  traverseTree.right = node.right === null ? null : traverse(node.right)

  return traverseTree
}

