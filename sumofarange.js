var arrayToReverse = ['A', 'B', 'C'];

var anotherArrayToReverse = ['A', 'B', 'C', 'D', 'E'];

console.log(reverseArray(arrayToReverse));
// [ 'C', 'B', 'A' ]
console.log(reverseArrayInPlace(anotherArrayToReverse))
// [ 'E', 'D', 'C', 'B', 'A' ]

function reverseArray(array) {

  var newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    newArray.push(element);
  }
  return newArray;
}

function reverseArrayInPlace(array) {

  for (let i = 0; i < Math.floor(array.length / 2); i++) {

    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }

  return array;
}