let arr = [12, 11, 8, 13, 15, 10, 7, 1, 3, 5, 4];

function swap(arr, xp, yp) {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

const bubbleSort = (arr, n) => {
  let i, j;

  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

// console.log(bubbleSort(arr, arr.length));

const bubbleSortRecursion = (arr, n) => {
  if (n === 1) return;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  bubbleSortRecursion(arr, n - 1);
};

console.log(bubbleSort(arr, arr.length));
