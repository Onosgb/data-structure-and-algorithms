//

// function myFunction({param = true}) {

// }

// function* gen1() {
//     console.log(yield, 1)
//     console.log(yield, 2)
//     console.log(yield, 3)
// }

// const iterator = gen1();

// console.log(iterator.next('a').value)
// console.log(iterator.next('b').value)
// console.log(iterator.next('c').value)

// const myArray = new Array(2);

// myArray[1] = 1;
// myArray[3] = 3;

// console.log('lenght', myArray.length);
// console.log('Elements:');
// for(const element of myArray) {
//     console.log('\t', element)
// }

// let myArray = [1,2];
// myArray.customProperty = true;

// for(const element of myArray) {
//     const element = myArray[index]
//     console.log(element)
// }

// async function apiCall() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve('b'), 50)
//     })
// }

// async function loga() {
//         setTimeout(() => resolve('b'), 10);
//         console.log(await apiCall());

//         console.log('c')
// }
//  loga()

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function createPhoneNumber2(numbers) {
  let firstPart = "";
  let secondPart = "";
  let thirdPart = "";

  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      firstPart += numbers[i].toString();
    } else if (i < 6) {
      secondPart += numbers[i].toString();
    } else {
      thirdPart += numbers[i].toString();
    }
  }

  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
