let longestPolinedrome = (arr) => {
  if (arr.length === 0) return "";

  let longest = "";

  for (let i = 0; i < arr.length; i++) {
    // check for odd-lenght polindromes
    let oddPalindrome = expandAroundCenter(arr, i, i);
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    // for even-lenght palindromes

    let evenPalindrome = expandAroundCenter(arr, i, i + 1);
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
};

let expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.slice(left + 1, right);
};
