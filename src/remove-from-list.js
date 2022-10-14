const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  console.debug(1, l, k);
  let element = l;
  if(element.value === null){
    return null;
  }
  if(element.value === k){
    element.value = element.next.value;
    element.next = element.next.next;
  }

  while(element.next){
    if(element.next.value === k){
      console.debug("Удаляем", element);
      element.next = element.next.next;
    }
    else {
      element = element.next;
    }
    console.debug(element);
  }
  console.debug(2, l);
  return l;
}
module.exports = {
  removeKFromList
};
