function countBuildings(heights) {
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    let hasView = true;
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] >= heights[i]) {
        hasView = false;
        break;
      }
    }
    if (hasView) {
      count++;
    }
  }
  return count;
}

// Exemple d'utilisation
console.log(countBuildings([3, 7, 8, 3, 6, 1])); // 3
console.log(countBuildings([1, 4, 5, 8])); // 1
