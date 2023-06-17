/* BEST CASE: O(n) time | O(1) space*/
/* WORST CASE: O(n^2) time | O(1) space*/

/* Algorithm: 
  1. Loop through the array
  2. Compare the current element with next element:
        if current el >  next el: swap
  3. Repeat the above steps
*/

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

bubbleSort([0, 2, 1, 2, 0, 1]);
