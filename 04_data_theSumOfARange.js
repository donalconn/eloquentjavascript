// // @ts-check

// // var array1 = ['a', 'b', 'c'];

// // array1.forEach(function(element) {
// //   console.log(element);
// // });

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"

// function range(start, end, step = 1) {
//   if (end < step && step > 0) {
//     step = -1;
//   }

//   var rangeArray = [];

//   if (step < 1) {
//     for (start; start >= end; start = start + step) {
//       rangeArray.push(start);
//     }
//   } else {
//     for (start; start <= end; start = start + step) {
//       rangeArray.push(start);
//     }
//   }

//   return rangeArray;
// }

// function sum(array) {
//   var sum = 0;
//   array.forEach(element => {
//     sum += element;
//   });

//   return sum;
// }

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(1, 10, 2));
// // → [ 1, 3, 5, 7, 9 ]
// console.log(range(5, 2, -1));
// // // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // // → 55
// console.log(range(5, 2));

// // → [5, 4, 3, 2]
// var myArray = [5, 4, 3, 3];

// function reverseArray(myArray) {
//   var newArray = [];

//   for (let index = myArray.length - 1; index > -1; index--) {
//     const element = myArray[index];
//     newArray.push(element);
//   }

//   return newArray;
// }

var reverse = [1, 2, 3, 4];

// console.log(reverseArray(myArray));

function reverseArrayInPlace(array) {
  for (let index = 0; index < array.length; index++) {
    last = array.pop;
    array.unshift(last);
  }
  return array;
}
console.log(reverseArrayInPlace(reverse));
