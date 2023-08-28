// function staircase(n) {
//     // Write your code here
//    let fildArray = new Array(n).fill(' ');

//    while(fildArray.indexOf(' ') !== -1) {
//        fildArray.shift(' ');
//        fildArray.push('#');
//        console.log(fildArray.join(""));
//        n--;
//    }

// }

// function staircase2(n) {

//     let output = ''

//     for (let i = 1; i <= n; i++) {

//         for (let s = n - 1; s >= i; s--) {
//             output += ' '
//         }

//         for (let h = 1; h <= i; h++) {
//             output += '#'
//         }
//         // new line
//         output += "\n"

//     }

//     console.log(output)
// }

function minimumDistances(a) {
  let minValue = Math.pow(10, 1000);
  let map = {};

  for (let i = 0; i < a.length; i++) {
    if (map[a[i]]) {
      let diff = i - (map[a[i]] - 1);
      if (diff < minValue) {
        minValue = diff;
      }
      map[a[i]] = i + 1;
    } else {
      map[a[i]] = i + 1;
    }
  }
  return minValue == "Infinity" ? -1 : minValue;
}
console.log(minimumDistances([3, 1, 6, 5, 1]));
