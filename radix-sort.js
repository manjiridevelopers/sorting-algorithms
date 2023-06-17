/* BEST CASE: O(d * (n + k)) time | O(n + k) space*/
/* AVERAGE CASE: O(d * (n + k)) time | O(n + k) space*/
/* WORST CASE: O(d * (n + k)) time | O(n + k) space*/

function radixSort(array) {
  if (array.length === 0) return;
  let max = Math.max(...array);
  let digit = 0;

  while (max / 10 ** digit > 0) {
    countingSort(array, digit);
    digit++;
  }
  console.log(array);
}

function countingSort(array, digit) {
  let sortedArr = new Array(array.length).fill(0);
  let countArr = new Array(10).fill(0);
  let place = 10 ** digit;

  for (let num of array) {
    let placeEl = Math.floor(num / place) % 10;
    countArr[placeEl]++;
  }

  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1];
  }

  for (let i = sortedArr.length - 1; i >= 0; i--) {
    let placeEl = Math.floor(array[i] / place) % 10;
    countArr[placeEl]--;
    sortedArr[countArr[placeEl]] = array[i];
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = sortedArr[i];
  }
}

radixSort([0, 2, 1, 2, 0, 1]);

/*

The average, worst, and best time/space complexity of radix sort 
depend on several factors, including the input data distribution, 
the size of the input, and the radix chosen for the sort.

Assuming a radix of 10 (i.e., sorting decimal integers), the time 
complexity of radix sort is O(d * (n + k)), where n is the number of 
elements to be sorted, d is the number of digits in the largest element, 
and k is the range of the values being sorted (i.e., the number of possible
values each digit can take).

Best case: When all the elements have the same number of digits, and the 
distribution of values is evenly spread across all possible values, 
the time complexity of radix sort is O(d * n).
Worst case: The worst-case scenario occurs when all the elements have 
the same prefix, and the last digit of each element is different, 
which requires sorting the input using a stable sorting algorithm, 
such as mergesort or insertion sort, at each digit position. 
In this case, the time complexity of radix sort is O(d * (n + k)).
Average case: The average-case time complexity of radix sort is also 
O(d * (n + k)), assuming a uniform distribution of input values.
The space complexity of radix sort is O(n + k), where n is the number 
of elements to be sorted, and k is the range of the values being sorted. 
This space complexity is required to store the output array, 
as well as the count and index arrays used during the sort.

*/
