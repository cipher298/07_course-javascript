// 1. Revert String
// function reverString(stringDemo) {
//     const result =  [];

//     for(let i = stringDemo.length-1; i >= 0; i--) {
//         result.push(stringDemo[i])
//     }

//     return result.join('')
// }
// console.log(reverString('abc'));

/*
==============================================================
==============================================================
==============================================================
*/
// 2. Fillter Number
// function isBoolean(value) {
//   return typeof value === "boolean";
// }

// console.log(isBoolean("a"));

// function isEmptyString(value) {
//   let b = "       ";
//   console.log(b.trim());
//   return typeof value === "string" && value.trim().length === 0;
// }

// function filterNumbers(arr) {
//   // Create the result list
//   const result = arr.filter(function (value) {
//     // Filter based on the rules for checking the input is number
//     if (isNaN(value) || isBoolean(value) || value === null) {
//       return false;
//     }
//     return true;
//   });
//   // Return numbers only list
//   return result;
// }

// console.log(
//   filterNumbers([1, "2", " ", null, Number.POSITIVE_INFINITY, 66, "ab1", false])
// );

/*
==============================================================
==============================================================
==============================================================
*/
//3. Find x in array
// function linerSearch(arr, x) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === x) {
//       return console.log(x + " index is " + i);
//     }
//   }
//   return console.log(x + " is not belong to array");
// }
// linerSearch([1, 2, 3, 4], 4);

// ==============================================================

// function linearSearch(arr, x) {
//   let index = 0;
//   // Iterate from start till end of list
//   while (index <= arr.length - 1) {
//     // If item was found then return index
//     if (arr[index] === x) {
//       return index;
//     } else {
//       index += 1;
//     }
//   }
//   // Return -1 to denote the item was not found
//   return -1;
// }

// let arr = [1, 3, 5, 7, 9, 11, 14, 18, 22, 22];
// console.info("Item was found at index: " + linearSearch(arr, 22));

// ==============================================================

// let arr = [1, 3, 5, 7, 9, 11, 14, 18, 22, 22];
// console.log("Item was found at index: " + arr.indexOf(22));

/*
==============================================================
==============================================================
==============================================================
*/

// 4. Closure
// function multiplier(first) {
//   let a = first;
//   return function (b) {
//     return a * b;
//   };
// }

// let multiplyBy2 = multiplier(2);
// console.info(multiplyBy2(4));
// console.info(multiplyBy2(5));

// function divMod(a, b) {
//   // Be careful for division by zero
//   if (b !== 0) {
//     return [a / b, a % b];
//   }
//   return [0, 0];
// }
// console.info(divMod(16, 5));
// console.info(divMod(20, 1));

/*
==============================================================
==============================================================
==============================================================
*/
// 5. Promiss
// const resultPromise = function (idea) {
//   return new Promise(function (resolve, reject) {
//     if (idea.isGood) {
//       resolve(idea);
//     } else {
//       reject({
//         idea: idea,
//         reason: "Not Realistic",
//       });
//     }
//   });
// };

// resultPromise({ idea: "Make Gold from Iron", isGood: false }).then(
//   function () {
//     console.info("I'm Rich!");
//   },
//   function (err) {
//     console.info("Rejected as: " + err.reason);
//   }
// );

/*
==============================================================
==============================================================
==============================================================
*/
// 6. flattens
// function flattens(arr = []) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattens(item));
//     } else {
//       result = result.concat(item);
//     }
//   }
//   return result;
// }
// console.log(flattens([1, [[2]], 3, [4]]));

/*
==============================================================
==============================================================
==============================================================
*/
// 7. binarySearch
// function binarySearch(arr, x) {
//   let lo = 0;
//   let hi = arr.length - 1;
//   while (lo <= hi) {
//     // Find mid element
//     let m = Math.floor((lo + hi) / 2);
//     // Check if equal to target
//     if (arr[m] === x) {
//       return m;
//       // Reduce array search space by half
//     } else if (arr[m] < x) {
//       lo = m + 1;
//     } else {
//       hi = m - 1;
//     }
//   }
//   // Item not found
//   return -1;
// }

// let arr = [1, 3, 5, 7, 9, 11, 14, 18, 22];
// console.info(console.info("Item was found at index: " + binarySearch(arr, 22)));

/*
==============================================================
==============================================================
==============================================================
*/
// 8. divMod
// function divMod(a, b) {
//   if (b !== 0) {
//     return {
//       div: a / b,
//       mod: a % b
//     };
//   }
//   return -1;
// }
// console.log(divMod(11, 2));

/*
==============================================================
==============================================================
==============================================================
*/
// 9. fibonacy
// function fibonacy(value) {
//   if (value === 0) {
//     return (value = 0);
//   }
//   if (value === 1) {
//     return (value = 1);
//   } else {
//     return (value = fibonacy(value - 1) + fibonacy(value - 2));
//   }
// }
// console.log(fibonacy(10));

// function memo(func) {
//   let cache = {};
//   return function (x) {
//     if (x in cache) return cache[x];
//     return (cache[x] = func(x));
//   };
// }

// let fib = memo(function (n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// });
// console.info(fib(10));

/*
==============================================================
==============================================================
==============================================================
*/
// 10. computeFrequency
// function computeFrequency(chuoi) {
//   // Create the freq hashtable
//   const freqTable = new Map();
//   // for each char in the string
//   for (let ky_tu of chuoi) {
//     // Check if we have seen it already
//     if (!freqTable.has(ky_tu)) {
//       freqTable.set(ky_tu, 1);
//     } else {
//       // Just increase the existing entry
//       freqTable.set(ky_tu, freqTable.get(ky_tu) + 1);
//     }
//   }
//   // Return result
//   return freqTable;
// }
// console.info(computeFrequency("abrakatabra"));

// function computeFrequency(chuoi) {
//   const listKyTu = new Map()
//   for(let ky_tu of chuoi) {
//     if(!listKyTu.has(ky_tu)){
//       listKyTu.set(ky_tu, 1)
//     } else {
//       listKyTu.set(ky_tu, listKyTu.get(ky_tu) + 1)
//     }
//   }
//   return listKyTu
// }

// console.log(computeFrequency('fdsffffdsfsd'));