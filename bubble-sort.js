/* BEST CASE: O(n) time | O(1) space*/
/* WORST CASE: O(n^2) time | O(1) space*/

function bubbleSort(array) {
  let arr = array;
  let check = true;

  while (check == true) {
    check = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(array, i, i + 1);
        check = true;
      }
    }
  }

  console.log(arr);
}

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

bubbleSort([6, 7, 2, 3, 4, 5, 7]);
