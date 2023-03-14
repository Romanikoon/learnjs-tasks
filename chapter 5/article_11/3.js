let date = new Date(2012, 0, 3);

function getWeekDay(date) {
  let day = [7, 1, 2, 3, 4, 5, 6];
  return day[date.getDay()];
}

console.log(getWeekDay(date));
