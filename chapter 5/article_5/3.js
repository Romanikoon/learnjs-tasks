function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val <= a || val >= b) {
      // на сайте неправильное условия и проверка, они противоречат друг другу
      arr.splice(i, 1);
      i--;
    }
  }
}
