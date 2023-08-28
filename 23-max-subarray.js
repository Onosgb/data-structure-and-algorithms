// function maxSubarraySum(arr, num) {
//   let max = -Infinity;

//   for( let i = 0; i < arr.length - num + 1; i++) {
//       let temp = 0;

//       for(let j = 0; j < num; j++) {
//           temp += arr[i + j];
//       }
//       if(temp > max) {
//           max = temp;
//       }
//   }
// }

// function maxSubarraySum(arr, num) {

//     if(arr.length < num) return null;
//     let maxSum = 0;
//     let tempSum = 0;

//     for(let i = 0; i < num; i++) {
//         maxSum +=arr[i];
//     }

//     tempSum = maxSum

//     for(let i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }

//     return maxSum
//   }
  
//   maxSubarraySum([1,2,5,2,8,1,5], 2);

