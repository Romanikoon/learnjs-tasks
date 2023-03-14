let user = { name: "John", years: 30 };

let { name: name, years: age, admin: admin = false } = user;

console.log(name);
console.log(age);
console.log(admin);
// ваш код должен быть с левой стороны:
// ... = user
