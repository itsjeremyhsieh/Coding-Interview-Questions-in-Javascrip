class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value)
    if(this.root == null)
      this.root = newNode;
    else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left
        }
        else if (value >= currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    while (true) {
      if (currentNode.value != value) {
        if(value < currentNode.value) {
          if (!currentNode.left)
            return false
          else
            currentNode = currentNode.left;
        }
        if(value > currentNode.value) {
          if (!currentNode.right)
            return false
          else
            currentNode = currentNode.right;
        }
      }
      else if (currentNode.value == value)
        return true
      else if (currentNode.left == null && currentNode.right == null)
        break
    }
    return false
  }

  remove(value) {
    let currentNode = this.root;
    let parentNode = null;
    let check = this.lookup(value);
    if (check == false)
      return
    while (currentNode.value != value) {
      if(value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      if(value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    if (!currentNode.right) {// no right child

      if (parentNode == null) 
        this.root = currentNode.left
      else {
        if (currentNode.value < parentNode.value)
          parentNode.left = currentNode.left;
        else if (currentNode.value > parentNode.value)
          parentNode.right = currentNode.left;
      }
    }
    else if (currentNode.right.left == null) {
      currentNode.right.left = currentNode.left;
      if (parentNode == null) {
        this.root = currentNode.right;
      }
      else {
        if (currentNode.value < parentNode.value) {
          parentNode.left = currentNode.right;
      } else if (currentNode.value > parentNode.value) {
          parentNode.right = currentNode.right;
        }
    } 
  }else {
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
    }

  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(20);
console.log(tree.lookup(9))
// tree.remove(170);
JSON.stringify(traverse(tree.root));
console.log(tree);
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
