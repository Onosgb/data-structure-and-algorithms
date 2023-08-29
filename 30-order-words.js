/*
Instruction:

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

function order(words) {
  // check for empty words
  if (words.length === 0) return "";

  let splited = words.split(" ");

  splited.sort((a, b) => {
    let positionA = Number(a.replace(/[a-zA-Z]/g, ""));
    let positionB = Number(b.replace(/[a-zA-Z]/g, ""));
    return positionA - positionB;
  });

  return splited.join(" ");
}

const input = "is2 Thi1s T4est 3a";
const sortedOutput = order(input);
console.log(sortedOutput);
