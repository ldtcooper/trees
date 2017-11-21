class Node {
  constructor(value) {
    this.value = value;
    this.rightChild = null;
    this.leftChild = null;
  }

  setParent(parent) {
    this.parent = parent;
  }

  setLeftChild(left) {
    this.leftChild = left;
    left.setParent(this);
  }

  setRightChild(right) {
    this.rightChild = right;
    right.setParent(this);
  }

  endNode() {
    if (this.rightChild || this.leftChild) {
      return false;
    } else {
      return true;
    }
  }

  toString() {
    const thisVal = `Value: ${this.value}`;
    const thisParent = `Parent Node: ${this.parent ? this.parent.value : "None"}`;
    const thisRight = `Right Child: ${this.rightChild ? this.rightChild.value : "None"}`;
    const thisLeft = `Left Child: ${this.leftChild ? this.leftChild.value : "None"}`;
    return(`-----\n${thisVal}\n${thisParent}\n${thisRight}\n${thisLeft}\n-----`);
  }
}

class BST {
  constructor(root) {
    this.root = root;
  }

  toString() {

  }

  insert(nodeVal) {
    let currentNode = root;
    const newNode = new Node(nodeVal);

    while (currentNode.endNode() === false) {
      if (currentNode.value < nodeVal) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    if (currentNode.value > nodeVal) {
      currentNode.setLeftChild(newNode);
    } else {
      currentNode.setRightChild(newNode);
    }
  }

}

const root = new Node(5);
const bst = new BST(root);
bst.insert(4);
bst.insert(6);
console.log(bst.root);
