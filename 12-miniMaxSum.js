/**
 * 
 * 
 * 
 * Explanation

The numbers are , , , , and . Calculate the following sums using four of the five integers:

Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Hints: Beware of integer overflow! Use 64-bit Integer.
 */

function miniMaxSum(arr) {
  // Write your code here

  let sum = 0;
  let minArray = [];

  // get the sum of the arrays
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (let j = 0; j < arr.length; j++) {
    minArray.push(sum - arr[j]);
  }

  const max = Math.max(...minArray);
  const min = Math.min(...minArray);

  console.log(min + " " + max);
}

miniMaxSum([1, 3, 5, 7, 9]);
