/* 
DESCRIPTION

My little sister came back home from school with the following task: given a squared sheet of paper she has to cut it in pieces which, when assembled, give squares the sides of which form an increasing sequence of numbers. At the beginning it was lot of fun but little by little we were tired of seeing the pile of torn paper. So we decided to write a program that could help us and protects trees.

Task
Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².

If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:

Examples
decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.

For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't form a strictly increasing sequence.

Note
Neither [n] nor [1,1,1,…,1] are valid solutions. If no valid solution exists, return nil, null, Nothing, None (depending on the language) or "[]" (C) ,{} (C++), [] (Swift, Go).

The function "decompose" will take a positive integer n and return the decomposition of N = n² as:

[x1 ... xk] or
"x1 ... xk" or
Just [x1 ... xk] or
Some [x1 ... xk] or
{x1 ... xk} or
"[x1,x2, ... ,xk]"
depending on the language (see "Sample tests")

Note for Bash
decompose 50 returns "1,3,5,8,49"
decompose 4  returns "Nothing"

Hint
Very often xk will be n-1.
*/

function decompose(n) {
  // Helper function to find the decomposition recursively
  function findDecomposition(target, current) {
    // Base case: If the target is 0, we've found a valid decomposition.
    if (target === 0) {
      return [];
    }

    // Loop through possible numbers (starting from 'current' down to 1)
    for (let i = current; i >= 1; i--) {
      // If subtracting the square of 'i' from the target doesn't make it negative or zero
      const x = target - i * i;

      if (x >= 0) {
        // Recursively find a decomposition for the remaining target
        const result = findDecomposition(x, i - 1);

        // If a valid decomposition is found
        if (result !== null) {
          // Add 'i' to the result and return it
          result.push(i);
          return result;
        }
      }
    }

    // If no valid decomposition is found, return null
    return null;
  }

  // Call the helper function to find the decomposition
  const result = findDecomposition(n * n, n - 1);

  // Return the result
  return result;
}

// Example usage:
console.log(decompose(11)); // Output: [1, 2, 4, 10]
console.log(decompose(50)); // Output: [1, 3, 5, 8, 49]
