/* BEST CASE: O(nlogn) time | O(log n) space*/
/* AVERAGE CASE: O(nlogn) time | O(log n) space*/
/* WORST CASE: O(n^2) time | O(log n) space*/

function quickSortMain(array) {
  quickSort(array, 0, array.length - 1);

  console.log(array);
}

function quickSort(array, start, end) {
  if (start >= end) return;
  let pivot = start;
  let i = start + 1;
  let j = end;

  while (i <= j) {
    if (array[i] > array[pivot] && array[j] < array[pivot]) {
      swap(array, i, j);
    }
    if (array[i] <= array[pivot]) i++;
    if (array[j] >= array[pivot]) j--;
  }
  swap(array, pivot, j);
  quickSort(array, start, j - 1);
  quickSort(array, j + 1, end);
}

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

quickSortMain([0, 2, 1, 2, 0, 1]);

/*
The average, worst, and best-case time and space complexity of the quick sort algorithm are as follows:

Time complexity:

Best-case time complexity: O(n log n), where n is the number of elements in the input array. This occurs when the pivot chosen is always the median of the subarray.
Average-case time complexity: O(n log n), where n is the number of elements in the input array. This occurs when the pivot chosen is not always the median, but the subarrays are balanced on average.
Worst-case time complexity: O(n^2), where n is the number of elements in the input array. This occurs when the pivot chosen is always the minimum or maximum element, which results in one subarray with n-1 elements and another with 0 elements.
Space complexity:

The space complexity of the quick sort algorithm is O(log n) in the best, average, and worst cases, where n is the number of elements in the input array. This space complexity is due to the recursive nature of the algorithm and the stack frames used to store the subarray indices.
It is worth noting that there are variations of the quick sort algorithm that aim to mitigate the worst-case time complexity, such as the randomized quick sort and the median-of-three quick sort.
*/
