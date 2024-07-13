var cources = ["Java", "PHP", "PYTHON"];

// var result = cources.forEach(function (value, index, array) {
//   console.log(index, value, array);
// });

Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

cources.forEach2(function (value, index, array) {
  console.log(index, value, array);
});
