import Node from '/nodes.js';

class BST {
  constructor(root) {
    this.root = root;
  }

  insert(nodeVal) {
    let currentNode = root;
    const newNode = new Node(nodeVal);

    while (!currentNode.emptyNode()) {
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
console.log(bst);
