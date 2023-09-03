/*
Sorting Algorithms that you can use to sort numbers
*/

let arr = [12, 11, 8, 13, 15, 10, 7, 1, 3, 5, 4];

// swap for sorting algorithm
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

/* 
Bubble Sort Algorithms
*/

// Using for loop
const bubbleSort = (arr) => {
  let n = arr.length - 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

console.log(bubbleSort(arr));

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
Select Sort Algorithm
 */

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

/*
QUICK SORT ALGORITHMS
*/

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];

  let left = [],
    right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const leftSort = quickSort(left);
  const rightSort = quickSort(right);

  return [...leftSort, pivot, ...rightSort];
}
