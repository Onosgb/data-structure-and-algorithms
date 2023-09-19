/*
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
  let res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res;
}


function add2(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(a[i]) : 0;
    const digit2 = j >= 0 ? parseInt(b[j]) : 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result += (sum % 10).toString();

    i--;
    j--;
  }

  // Reverse the result to get the correct order
  return result.split("").reverse().join("");
}
