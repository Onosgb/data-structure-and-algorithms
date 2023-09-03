let arr = [12, 11, 8, 13, 15, 10, 7, 1, 3, 5, 4];

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

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

console.log("quickSort: ", quickSort(arr));
