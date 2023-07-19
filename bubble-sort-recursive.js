function swap(arr, n, m) {
  let temp = arr[n];
  arr[n] = arr[m];
  arr[m] = temp;
}

function bubbleSortRecursive(arr, n) {
  if (n == 1) return;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }

  bubbleSortRecursive(arr, n - 1);
}

function bubbleSortMain(arr) {
  bubbleSortRecursive(arr, arr.length);
  return arr;
}

const result = bubbleSortMain([0, 2, 1, 2, 0, 1]);
console.log(result);
