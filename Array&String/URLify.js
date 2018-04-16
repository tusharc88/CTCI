// using regex
function urlify(str, len) {
  str = str.replace(/  +/g, ' ').trim(); // to remove more than 1 space in between
  return str.replace(/ +/g, '%20');
}

// assuming there is only single whitespaces in between
function urlify(str, len) {
  const strArr = str.trim().split('');
  return strArr
    .map((val, index) => {
      if (val === ' ') return '%20';
      else return val;
    })
    .join('');
}

function urlify(str, len) {
  const strArr = str.trim().split('');
  let counter = 0;
  for (let val of strArr) {
    if (val === ' ') strArr.splice(counter, 1, '%20');
    counter++;
  }
  return strArr.join('');
}
