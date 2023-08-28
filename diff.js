function sort(arr) {
    let myArray = Array.from(arr).sort()
    return myArray
}

let s = 'abcd';
let t = 'bcdea'

function findTheDifference (s, t) {
    let sortedS = sort(s.split(''));
    let sortedT = sort(t.split(''));

   for(let i = 0; i < s.length; i++) {
       if(sortedS[i] !== sortedT[i]) {
           return sortedT[i]
       }
   }

   return sortedT[s.length];
}

console.log(findTheDifference(s, t));
