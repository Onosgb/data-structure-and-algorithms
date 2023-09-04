/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word) {
  // Convert the word to lowercase
  word = word.toLowerCase();

  // Create a Map to track character counts
  const charCount = new Map();

  // Iterate through each character and count occurrences
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Map characters to '(' or ')' based on their count
  return word
    .split("")
    .map((char) => (charCount.get(char) > 1 ? ")" : "("))
    .join("");
}
