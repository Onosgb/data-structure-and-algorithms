//
// Build a Xbonacci function that takes a signature of X elements - and
// remember each next element is the sum of the last X elements - and
// returns the first n elements of the so seeded sequence.
//
// xbonacci([1,1,1,1],10) -> [1,1,1,1,4,7,13,25,49,94]
// xbonacci([0,0,0,0,1],10) -> [0,0,0,0,1,1,2,4,8,16]
// xbonacci([1,0,0,0,0,0,1],10) -> [1,0,0,0,0,0,1,1,2,4]
//

const xbonacci = (signature, n) => {
  let width = signature.length;

  let result = signature.slice(0);

  for (let i = width; i < n; i++) {
    let prevSum = arraySum(result.slice(i - width, i));
    result.push(prevSum);
  }
  return result.slice(0, n);
};

const arraySum = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, curr) => acc + curr);
};

console.log(xbonacci([1, 1, 1, 1], 20));
