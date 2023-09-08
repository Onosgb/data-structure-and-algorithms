/* 
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function calculateScore(dice) {
  let counts = [0, 0, 0, 0, 0, 0];

  // loop through the dice and counts;
  for (let die of dice) {
    counts[die - 1]++;
  }

  let score = 0;

  // loop through the six dice and add them to the score

  for (let i = 0; i < dice.length; i++) {
    // Three of a kind
    if (counts[i] >= 3) {
      if (i === 0) {
        score += 1000;
      } else {
        // Three of other number
        score += (i + 1) * 100;
      }

      // remove used dice
      counts[i] -= 3;
    }
  }

  score += counts[0] * 100;
  score += counts[4] * 50;
  return score;
}

// Example throws
console.log(calculateScore([5, 1, 3, 4, 1])); // Output: 250
console.log(calculateScore([1, 1, 1, 3, 1])); // Output: 1100
console.log(calculateScore([2, 4, 4, 5, 4])); // Output: 450
