
// Example 2 Recoursion with count down
function countDown(num) {
    if(num <= 0 ) {
        console.log(num);
        return;
    }

    console.log(num);
    num--;
    countDown(num)
}


// Our second recursive function example

function sumRange(num) {
    if(num === 1) return 1; // base case
    return num + sumRange(num - 1); // recursive 
}

// console.log( sumRange(4));

function factorial(num) {
    if(num === 1) return 1; // base;
    return num * factorial(num - 1);
}

// console.log(factorial(5))

function isOddNumber(arr) {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(isOddNumber(arr.slice(1)))
    return newArr
}

console.log(isOddNumber([1,2,3,4,5,6,7,8,9]))
