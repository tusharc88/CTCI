// forEach loop cannot be broken
// map.x will introduce key x in map. map[x] will introduce whatever the value of x is as key in map

// O(n^2) & using extra DS
function isUnique(str) {
  const arr = str.split('');
  let counter = 0;

  for (let val of arr) {
    if (arr.indexOf(val, counter + 1) > -1) return false;

    counter++;
  }

  return true;
}

// O(n) & using extra ds
function isUnique(str) {
  const map = {};
  for (let char of str) {
    if (char in map) {
      return false;
    } else {
      map[char] = 1;
    }
  }

  return true;
}

// O(n^2) and no other ds
function isUnique(str) {
  const strLen = str.length;

  for (let i = 0; i < strLen - 1; i++) {
    const char = str.charAt(i);
    for (let j = i + 1; j < strLen; j++) {
      if (char === str.charAt(j)) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isUnique;
