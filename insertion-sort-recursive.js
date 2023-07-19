function swap(arr, n, m) {
  let temp = arr[n];
  arr[n] = arr[m];
  arr[m] = temp;
}

function insertionSort(arr, n) {
  if (n == arr.length) return;

  let j = n;
  while (j > 0 && arr[j - 1] > arr[j]) {
    swap(arr, j, j - 1);
    j--;
  }

  insertionSort(arr, n + 1);
}

function insertionSortMain(arr) {
  insertionSort(arr, 0);
  return arr;
}

const result = insertionSortMain([0, 2, 1, 2, 0, 1]);
console.log(result);
