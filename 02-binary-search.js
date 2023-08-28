let arr = [
  // 10, 20, 80, 30, 60, 50, 110, 100, 130, 170, 180, 181, 182, 183, 184, 185, 186,
  // 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
  2,
  3, 4, 10, 40,
];

// arr = arr.sort((a, b) => a - b);

let end = arr.length - 1;
let start = 0;
let x = 2;
const recursion = (arr, x, start, end) => {
  // Base case
  if (start > end) return -1;

  // divid element by half
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) return arr[mid];

  // If element mid is greater than x, search the left;
  if (arr[mid] > x) return recursion(arr, x, start, mid - 1);
  // if element mid is less than x search the right;
  else return recursion(arr, x, mid + 1, end);
};

const result = recursion(arr, x, start, end);
console.log(result);
