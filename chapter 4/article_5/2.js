function Calculator() {
  this.read = function () {
    this.first = +prompt("Введите первое число", "0");
    this.second = +prompt("Введите второе число", "0");
  };
  this.sum = function () {
    return this.first + this.second;
  };
  this.mul = function () {
    return this.first * this.second;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
