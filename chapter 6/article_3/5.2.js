function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([5, 3, 1])));
