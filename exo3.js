function findPair(nums, k) {
  let seen = new Set();
  for (const num of nums) { // idem boucle normale   for (let i = 0; i < nums.length; i++) {
    if (seen.has(k - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

// Exemple d'utilisation
console.log(findPair([10, 15, 3, 7], 17)); // true
console.log(findPair([1, 8, 10, 21], 19)); // false
