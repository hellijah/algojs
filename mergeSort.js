function mergeSort(arr, countComparisons = { count: 0 }) {
  if (arr.length <= 1) return { sortedArray: arr, countComparisons };

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), countComparisons);
  const right = mergeSort(arr.slice(mid), countComparisons);

  const merged = merge(left.sortedArray, right.sortedArray, countComparisons);
  return { sortedArray: merged, countComparisons };
}

function merge(left, right, countComparisons) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
      countComparisons.count++;
      if (left[i] < right[j]) {
          sortedArray.push(left[i++]);
      } else {
          sortedArray.push(right[j++]);
      }
  }

  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
  return { sortedArray: sortedArray, countComparisons: countComparisons };
}

module.exports = mergeSort;
