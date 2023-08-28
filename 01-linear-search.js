const arr = [
  10, 20, 80, 30, 60, 50, 110, 100, 130, 170, 180, 181, 182, 183, 184, 185, 186,
  187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
];
// console.time("starttime");

function findX(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    // if the element is present return i
    if (x === arr[i]) return i;
  }

  // if the element is not present return -1;

  return -1;
}
// console.timeEnd("starttime");
// findX(arr, 199);

console.time("starttime1");

function findX2(arr, search_element) {
  let left = 0;
  let right = arr.length - 1;
  let position = -1;

  for (left = 0; left < right; ) {
    if (arr[left] === search_element) {
      position = left;
      break;
    }

    if (arr[right] === search_element) {
      position = right;
      break;
    }

    left++;
    right--;
  }

  return position;
}
console.timeEnd("starttime1");

findX2(arr, 199);
