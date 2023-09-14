/* 
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
*/

// Function to sort the digits of a number in descending order
const sortedDigits = (n) => {
  // Convert the input number to a string and split it into an array of individual digits
  let arr = n.toString().split("");
  // Sort the array of digits in descending order (from largest to smallest)
  arr.sort((a, b) => b - a);
  // Return the sorted array
  return arr;
};

// Function to find the next bigger number formed by rearranging the digits of the input number n
function nextBigger(n) {
  // Get the sorted array of digits for the input number
  let arr = sortedDigits(n);
  // Convert the sorted array of digits back to an integer
  let max = parseInt(arr.join(""), 10);

  // Loop from n + 1 up to max
  for (var i = n + 1; i <= max; i++) {
    // Check if the sorted digits of the current number match the sorted digits of the input number
    if (sortedDigits(i).every((x, j) => x === arr[j])) {
      // If a match is found, return the current number i as the next bigger number
      return i;
    }
  }

  // If no next bigger number is found, return -1
  return -1;
}

// Example usage:
const result = nextBigger(511584);
console.log(result); // Output: 511851 (the next bigger number)
