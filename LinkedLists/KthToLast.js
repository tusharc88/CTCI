let Node = require('./Node');

function kthToLast(head, k) {
  let fastPointer = head;
  let slowPointer = head;

  if (head === null) return null;

  let counter = 0;
  while (counter < k) {
    // this means there are not enough nodes to find kth to last node
    if (fastPointer === null) return null;
    fastPointer = fastPointer.next;
    counter++;
  }

  while (fastPointer.next !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
}

module.exports = kthToLast;
