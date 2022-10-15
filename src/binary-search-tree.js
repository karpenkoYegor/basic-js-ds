const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(value) {
    if(!this.rootTree){
      this.rootTree = new Node(value);
      return;
    }

    let currentNode = this.rootTree;

    while(true){
      console.debug(currentNode);
        if(value > currentNode.data){
          if(!currentNode.right){
            currentNode.right = new Node(value);
            break;
          }
          else
            currentNode = currentNode.right;
        }
        if(value < currentNode.data) {
          if (!currentNode.left){
            currentNode.left = new Node(value);
            break;
          }
          else
            currentNode = currentNode.right;
        }
      }
  }

  has(data) {
    if(!this.rootTree){
      return false;
    }
    let currentNode = this.rootTree;
    console.debug(currentNode);
    while(true){
      if(data > currentNode.data){
        if(!currentNode.right){
          console.debug("нет");
          return false;
        }
        else
          currentNode = currentNode.right;
      }
      else if(data < currentNode.data) {
        if (!currentNode.left){
          console.debug("нет");
          return false;
        }
        else
          currentNode = currentNode.right;
      }
      else
        return true;
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};