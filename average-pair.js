function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  if (arr.length === 0) return false;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      return true;
    } else if (average < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

module.exports = averagePair;
