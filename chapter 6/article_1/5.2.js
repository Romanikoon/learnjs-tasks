let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let arr = [];
  let tmp = { ...list };

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  arr.reverse();
  for (let item of arr) console.log(item);
}

printList(list);
