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

console.log("array", selectedSort(arr, arr.length));
