function findPairWithSum(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
          return true;
      }
    }
  }
  return false;
}

// Exemple d'utilisation
console.log(findPairWithSum([10, 15, 3, 7], 17)); // true
console.log(findPairWithSum([1, 8, 10, 21], 19)); // false
