var  chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, n) {
  var newArray = [n, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, n) {
    array.unshift(n);
    return array;
}

function addElementToEndOfArray(array, n) {
  var newArray = [...array, n];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, n) {
    array.push(n);
    return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array, n) {
  array.shift(n);
  return array;
}

function removeElementFromBeginningOfArray(array) {
   return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}

function accessElementInArray(array, n){
  return array[n];
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}