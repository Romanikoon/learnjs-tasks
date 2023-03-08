function Calculator(str) {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let strSpl = str.split(" ");
    let a = +strSpl[0];
    let b = +strSpl[2];
    let operand = strSpl[1];

    return this.methods[operand](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator();
console.log(calc.calculate("19 + 47"));
