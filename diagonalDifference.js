function diagonalDifference(arr) {
    // Write your code here
    let left = 0;
    let right = 0;
    for(let i = 0; i < arr[0].length; i++) {
        left += arr[i][i];
        right += arr[i][arr.length - i - 1]
    }
    return Math.abs(left - right)
}

function diffDiag(arr) {
    let diff;
    let left=0;
    let right = 0;
    for (let i=0; i<arr.length; i++) {
        left += arr[i][i];
        right += arr[i].reverse()[i];
        diff = Math.abs(left - right)
    }
    return diff;
}