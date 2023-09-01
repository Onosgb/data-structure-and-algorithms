/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
  // do magic
  // divid the array into two for better perfomance
  let left = 0;
  let right = arr.length - 1;

  // compare both left and right as you loop through the array
  while (left <= right) {
    arr = arr.filter((a) => arr[left] !== a || arr[right] !== a);
    left++;
    right--;
  }

  // return the special character
  return arr[0];
}

// more efficient implementation
function findUniq2(arr) {
  // sort the array
  arr.sort((a, b) => a - b);

  // remove the duplicates
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
