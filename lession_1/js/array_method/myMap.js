Array.prototype.myMap = function (cb) {
  var arrayLength = this.length;
  var outPut = [];
  let i = 0;
  for (; i < arrayLength; i++) {
    var result = cb(this[i], i);
    outPut.push(result);
  }
  return outPut;
};

// Expected results
const numbers = [1, 2, 3];

console.log(
  numbers.myMap(function (number) {
    return number * 2;
  })
); // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]