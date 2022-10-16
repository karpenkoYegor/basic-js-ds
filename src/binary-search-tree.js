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
    let newNode;
    console.log(value);
    if(value)
      newNode = new Node(value);
    if(!this.rootTree){
      this.rootTree = newNode;
      return;
    }

    let currentNode = this.rootTree;


    while(true){

        if(value > currentNode.data){
          if(!currentNode.right){
            currentNode.right = newNode;
            break;
          }
          else
            currentNode = currentNode.right;
        }
        else if(value < currentNode.data) {
          if (!currentNode.left){
            currentNode.left = newNode;
            break;
          }
          else
            currentNode = currentNode.left;
        }
        else
          currentNode = newNode;
      }
  }

  has(data) {
    if(!this.rootTree){
      return false;
    }
    let currentNode = this.rootTree;
    while(true){
      if(data > currentNode.data){
        if(!currentNode.right){
          return false;
        }
        else
          currentNode = currentNode.right;
      }
      else if(data < currentNode.data) {
        if (!currentNode.left){
          return false;
        }
        else
          currentNode = currentNode.left;
      }
      else
        return true;
    }
  }

  find(data) {
    if(!this.rootTree){
      return false;
    }
    let currentNode = this.rootTree;
    while(true){
      if(data > currentNode.data){
        if(!currentNode.right){
          return null;
        }
        else
          currentNode = currentNode.right;
      }
      else if(data < currentNode.data) {
        if (!currentNode.left){
          return null;
        }
        else
          currentNode = currentNode.left;
      }
      else
        return currentNode;
    }
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
