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
  // convert the word to lowercase;
  word = word.toLowerCase();

  // split the word to string
  word = word.split("");

  // track each words and count their number
  let appeard = {};

  for (let i = 0; i < word.length; i++) {
    // if word already exist add 1
    if (Object.keys(appeard).includes(word[i])) {
      appeard[word[i]] = appeard[word[i]] + 1;
    } else {
      appeard[word[i]] = 1;
    }
  }

  // manipulate the word and return the replace string;
  return word
    .map((dt) => {
      return appeard[dt] > 1 ? ")" : "(";
    })
    .join("");
}
