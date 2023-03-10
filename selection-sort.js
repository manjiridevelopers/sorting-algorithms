/* BEST CASE: O(n^2) time | O(1) space*/
/* WORST CASE: O(n^2) time | O(1) space*/

function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }
    swap(array, startIdx, smallestIdx);
    startIdx++;
  }

  console.log(array);
}

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

selectionSort([6, 7, 2, 3, 4, 5, 7]);
