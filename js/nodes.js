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

  toString() {
    const thisVal = `Value: ${this.value}`;
    const thisParent = `Parent Node: ${this.parent ? this.parent.value : "None"}`;
    const thisRight = `Right Child: ${this.rightChild ? this.rightChild.value : "None"}`;
    const thisLeft = `Left Child: ${this.leftChild ? this.leftChild.value : "None"}`;
    return(`-----\n${thisVal}\n${thisParent}\n${thisRight}\n${thisLeft}\n-----`);
  }
}

// export default Node;
