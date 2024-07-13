var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([1]);
    }, 1000);
  });
  
  var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([2, 3]);
    }, 1000);
  });
  
  Promise.all([promise1, promise2])
    .then(function ([promise1, promise2]) {
      console.log(promise1.concat(promise2));
    })
    .catch(function (err) {
      console.log(err);
    });
  