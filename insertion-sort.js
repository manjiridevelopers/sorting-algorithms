/* BEST CASE: O(n) time | O(1) space*/
/* WORST CASE: O(n^2) time | O(1) space*/

function insertionSort(array) {
  let arr = array;

  for (let i = 1; i < arr.length - 1; i++) {
    let j = i;

    while (j >= 1 && arr[j] < arr[j - 1]) {
      swap(array, j, j - 1);
      j--;
    }
  }
  console.log(arr);
}

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

insertionSort([6, 7, 2, 3, 4, 5, 7]);
