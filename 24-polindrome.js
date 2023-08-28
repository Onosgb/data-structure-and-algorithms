function longestPalindrome(s) {
  if (s.length === 0) {
    return "";
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    // For odd-length palindromes
    let oddPalindrome = expandAroundCenter(s, i, i);
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    // For even-length palindromes
    let evenPalindrome = expandAroundCenter(s, i, i + 1);
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

// Test the function
const inputString = "babad";
const result = longestPalindrome(inputString);
console.log(result); // Output: "bab"
