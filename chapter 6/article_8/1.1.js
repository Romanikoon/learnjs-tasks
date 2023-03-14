function printNumbers(from, to) {
  let count = from;

  let timerId = setInterval(function () {
    console.log(count);
    if (count === to) clearInterval(timerId);
    count++;
  }, 1000);
}

printNumbers(1, 10);
