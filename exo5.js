function compare(a, b) {
  return a - b;
}

const findPair = (arr, k) => {
  arr.sort(compare);

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let som = arr[left] + arr[right];

    if (som > k) {
      right--;
    } else if (som < k) {
      left++;
    } else { // som == k
      return true;
    }
  }

  return false;
}

// Exemple d'utilisation
console.log(findPair([10, 15, 3, 7], 17)); // true
console.log(findPair([1, 8, 10, 21], 19)); // false
