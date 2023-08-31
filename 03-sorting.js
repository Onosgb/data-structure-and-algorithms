/*
Sorting Algorithms that you can use to sort numbers
*/

/*
Select Sort Algorithm
 */
let arr = [12, 11, 8, 13, 15, 10, 7, 1, 3, 5, 4];

function swap(arr, xp, yp) {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

const selectedSort = (arr, n) => {
  let i, j, mid_idx;

  // one by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    mid_idx = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[mid_idx]) mid_idx = j;
    }

    // swap the found minimum element with the first element;
    swap(arr, mid_idx, i);
  }
  return arr;
};

// console.log("array", selectedSort(arr, arr.length));

/* 
Bubble Sort Algorithms
*/

// Using for loop
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

// Using recursion
const bubbleSortRecursion = (arr, n) => {
  if (n === 1) return;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }

  bubbleSortRecursion(arr, n - 1);
};

// console.log(bubbleSort(arr, arr.length));

/* 
Insertion sort algorithm
*/

let n = arr.length;
// Function to sort an array using insertion sort
function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  console.log(arr);
}
// insertionSort(arr, n);
