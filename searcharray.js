// function search(arr, value) {
// let index = 0;
// while(index < arr.length) {
//     index++
//     if(value === arr[index]) {
//         return index
//     }
// }

// return - 1;
// }

function search(arr, val){
    let min = 0;
    let max = arr.length - 1;
    while(min <= max) {
        let middle = Math.floor((min + max) / 2) ;
        if(arr[middle] < val) {
            min = middle + 1;
        } else if(arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
console.time('start')
console.log(search([1,2,3,4,5,6],4));
console.timeEnd('start')