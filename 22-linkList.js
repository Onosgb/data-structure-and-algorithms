const obj = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
  tail: {
    value: 3,
    next: null,
  },
  length: 3,
};

function insert(newValue, index) {
  let currentNode = obj.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  currentNode.next = { value: newValue, next: index };
  obj.tail = currentNode.next;
  obj.length++;
}

insert(4, null);
console.log(obj);
