/* BEST CASE: O(nlogn) time | O(N) space*/
/* WORST CASE: O(nlogn) time | O(N) space*/

function mergeSort(array) {
  if (array.length <= 1) return array;
  let midIdx = Math.floor(array.length / 2);
  let leftArr = array.slice(0, midIdx);
  let rightArr = array.slice(midIdx);

  let mergedArr = merge(mergeSort(leftArr), mergeSort(rightArr));

  return mergedArr;
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      sortedArr[k++] = leftArr[i++];
    } else {
      sortedArr[k++] = rightArr[j++];
    }
  }

  while (i < leftArr.length) {
    sortedArr[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
    sortedArr[k++] = rightArr[j++];
  }

  return sortedArr;
}

const result = mergeSort([0, 2, 1, 2, 0, 1]);
console.log(result);
/*
Space complexity:

The space complexity of the merge sort algorithm is O(n) 
in the worst case, where n is the number of elements in 
the input array. This space complexity is due to the temporary 
arrays used to store the sorted subarrays during the merge operation. 
However, the space complexity can be reduced to O(log n) by using an 
iterative implementation or by merging in-place. 
*/
