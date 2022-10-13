const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor(value){
    this.firstElement = null;
    this.nextElement = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.firstElement;
  }

  enqueue(value) {
    let lastElement = new ListNode(value);
    if(this.length === 0){
      this.firstElement = lastElement;
    }
    else{
      this.nextElement.next = lastElement;
      console.debug(this.nextElement);
    }
    this.nextElement = lastElement;
    this.length++;
  }

  dequeue() {
    let result = this.firstElement;
    this.firstElement = this.firstElement.next;
    return result.value;
  }
}

module.exports = {
  Queue
};
