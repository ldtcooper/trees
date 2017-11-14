class Node {
  constructor(value) {
    this.value = value;
    this.rightChild = null;
    this.leftChild = null;
  }
  
  setParent(parent) {
    this.parent = parent
  }
  
  setLeftChild(left) {
    this.leftChild = left;
  }
  
  setRightChild(right) {
    this.rightChild = right;
  }
}