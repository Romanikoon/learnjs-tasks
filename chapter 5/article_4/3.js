let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // ?  массив с 3я элементами а б функция
