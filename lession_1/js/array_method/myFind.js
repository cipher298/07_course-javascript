Array.prototype.myFind = function (cb) {
  var arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    if (cb(this[i], i)) {
      return this[i];
    }
  }
  return undefined; // If no match is found
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Find the first even number
const firstEven = numbers.myFind(function (number) {
  return number % 2 === 0;
});

console.log("First even number:", firstEven); // Output: 2

console.log(numbers.myFind(function(element){
  return element > 2
}));
