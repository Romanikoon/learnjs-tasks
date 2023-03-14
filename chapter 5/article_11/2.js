let date = new Date(2012, 0, 3);

function getWeekDay(date) {
  let day = {
    0: "ВС",
    1: "ПН",
    2: "ВТ",
    3: "СР",
    4: "ЧТ",
    5: "ПТ",
    6: "СБ",
  };
  return day[date.getDay()];
}

console.log(getWeekDay(date));
