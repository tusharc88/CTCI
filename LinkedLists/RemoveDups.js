let Node = require('./Node');

// using buffer
function removeDups(head) {
  if (head === null) return null;
  let prev = head;
  let current = this.head.next;
  const map = {};
  map[prev.data] = true;

  while (current !== null) {
    if (!map[current.data]) {
      map[current.data] = true;
    } else {
      prev.next = current.next;
    }
    prev = current;
    current = current.next;
  }

  return head;
}

module.exports = removeDups;
