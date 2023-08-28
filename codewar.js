function SumMultiplier(arr) {
  (function () {
    var a = (b = 5);
  })();

  console.log(b);
}

const arr = [2, 5, 6, -6, 16, 2, 3, 6, 5, 3];

SumMultiplier(arr);
