var number = [1, 2, 3, 4, 5];

Array.prototype.reduce2 = function (callback, innitalValue) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    innitalValue = this[0];
  }
  for (; i < this.length; i++) {
    innitalValue = callback(innitalValue, this[i], i, this);
  }
  return innitalValue;
};

function totalNumber(arr) {
  return arr.reduce2(function (totalNum, currentVal) {
    return totalNum + currentVal;
  });
}

console.log(totalNumber(number));
