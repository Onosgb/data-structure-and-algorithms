const arr = [
  10, 20, 80, 30, 60, 50, 110, 100, 130, 170, 180, 181, 182, 183, 184, 185, 186,
  187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
];

function findX(arr, search_element) {
  let left = 0;
  let right = arr.length - 1;
  let position = -1;

  while (left < right) {
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

console.log(findX(arr, 199));
