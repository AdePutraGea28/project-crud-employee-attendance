
const x = new Date().getDay()
console.log(x);

function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function getTime() {
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ':' + m;
  //   return time;
  console.log(time);
}

// function printStatement() {
//   console.log('Printed after 3 seconds');
// }
// setTimeout(getTime, 1000);
// console.log('Printed Immediately');
