"use strict";
let userName = prompt("Кто там?", "");

if (userName === "Админ") {
  let pass = prompt("Пароль?", "");

  if (pass === "Я главный") {
    alert("Здравствуйте!");
  } else if (pass === "" || pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (!userName) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
