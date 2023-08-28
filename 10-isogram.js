/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */

function isIsogram(str) {
  //...
  str = str.toLowerCase();
  const wordRepeat = Object.create({});

  const strArr = str.split("");

  for (const letter of strArr) {
    if (wordRepeat[letter] == letter) return false;
    wordRepeat[letter] = letter;
  }
  return true;
}

console.log(isIsogram("aba"));
