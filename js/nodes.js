// this node class will serve as the basic building block of all future tree classes

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
}

export default Node;
