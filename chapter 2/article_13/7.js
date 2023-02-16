"use strict";

let n = 10;

test: for (let i = 2; i <= n; i++) {
  const p = i ** (1 / 2);
  for (let j = 2; j <= p; j++)
    if (i % j === 0) {
      continue test;
    }
  alert(i);
}
