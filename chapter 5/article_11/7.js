function getSecondsToTomorrow() {
  let d = new Date();
  return (
    24 * 3600 - (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds())
  );
}

console.log(getSecondsToTomorrow());
