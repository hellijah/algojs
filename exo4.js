function countBuildings(heights) {
  let maxRight = 0;
  let count = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > maxRight) {
        count++;
        maxRight = heights[i];
    }
  }
  return count;
}

// Exemple d'utilisation
console.log(countBuildings([3, 7, 8, 3, 6, 1])); // 3
console.log(countBuildings([1, 4, 5, 8])); // 1
