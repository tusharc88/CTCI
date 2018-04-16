//O(nlogn) minimum and using arrays
function checkPermutation(str1, str2) {
  const sortedStr1 = str1
    .split('')
    .sort()
    .join();
  const sortedStr2 = str2
    .split('')
    .sort()
    .join();

  if (sortedStr1 !== sortedStr2) return false;

  return true;
}

// O(n) using map
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = {};
  for (let char of str1) {
    if (char in map) {
      map[char] = map[char] + 1;
    } else {
      map[char] = 1;
    }
  }

  for (let char of str2) {
    if (char in map) {
      map[char] = map[char] - 1;
      if (map[char] === 0) delete map[char];
    } else {
      return false;
    }
  }

  return true;
}

module.exports = checkPermutation;
