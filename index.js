/* binary search will find a middle point until the middle point is the searched value or the search range is invalid.
recursive approach will call the same function instead of using while/for loop iterations.
input database is an array of numbers and the searched value is a number.
output is the index number of the searchValue in our database.
if the value cannot be found in the array, the return value will be null.

note: the idea of binary search is efficiency. using the prototype sort method may seem counterintuitive in this case. the reasoning here is to point out that the binary search of numbers needs to be done in a sorted array and testing different scenarios.
*/

// functions

// create a preliminary function that will run a recursive function with added arguments (min/max) and sort the data 
function searchIndexRecursiveRawData(data, searchValue) {

  // sort the array
  let sortedData = data.sort(compareNumbers);
  
  // run the main function with the sorted array with min/max range arguments
  return searchRecursive(sortedData, searchValue, 0, sortedData.length - 1);
}

function searchRecursive(array, value, min, max) {  
  // return null if the min value is greater than the max value
  if (min > max){
    return null;
  }

  // pick a mid point
  let mid = Math.floor((min + max) / 2);
  // return the respective index if midpoint is the seached value
  if (array[mid] === value) {
    return mid;
  }

  // update the min/max range
  if (value > array[mid]) {
    min = mid + 1;
  } else if (value < array[mid]) {
    max = mid - 1;
  }

  // run the function again
  return searchRecursive(array, value, min, max);

}

// helper function for sorting
function compareNumbers(a, b) {
  return a - b;
}

// assertion function
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`Passed [${testName}]`);
  }
  else {
    console.log(`FAILED [${testName}] expected "${expected}" got "${actual}"`);
  }
}

// test suite
function testRecursiveBinarySearchSorted() {
  let data = [25, 28, 32, 36, 56];
  let searchValue = 36;
  let actual = searchIndexRecursiveRawData(data, searchValue);
  let expected = 3;
  let testResult = assertEqual(actual, expected, 'Should return the correct index when the input is a sorted array and a number');
}

function testRecursiveBinarySearchNotFound() {
  let data = [25, 28, 32, 36, 56];
  let searchValue = 35;
  let actual = searchIndexRecursiveRawData(data, searchValue);
  let expected = null;
  let testResult = assertEqual(actual, expected, 'Should return null index if the searched value is not found');
}

function testRecursiveBinarySearchUnsorted() {
  let data = [22, 5, 39, 7, 25, 156, 3];
  let searchValue = 25;
  let actual = searchIndexRecursiveRawData(data, searchValue);
  let expected = 4;
  let testResult = assertEqual(actual, expected, 'Should sort the data properly and then give us the index of the search value in it');
}

function testRecursiveBinarySearchNegativeUnsorted() {
  let data = [22, -5, 39, 7, -25, 156, 38, -3,];
  let searchValue = 38;
  let actual = searchIndexRecursiveRawData(data, searchValue);
  let expected = 5;
  let testResult = assertEqual(actual, expected, 'Should return the correct index when the data is unsorted and negative numbers are used along with positive numbers');
}

function testRecursiveBinarySearchFloatNumbers() {
  let data = [22, -5.36, 39.21, 7.569, -25.22, 156, 38.0956, -3.54,];
  let searchValue = 38.0956;
  let actual = searchIndexRecursiveRawData(data, searchValue);
  let expected = 5;
  let testResult = assertEqual(actual, expected, 'Should work with decimals, positive and negative numbers, with unsorted data.');
}

// execute the test
testRecursiveBinarySearchSorted() 
testRecursiveBinarySearchNotFound()
testRecursiveBinarySearchUnsorted() 
testRecursiveBinarySearchNegativeUnsorted()
testRecursiveBinarySearchFloatNumbers()

// sample usage
{
let sampleData = [22, -5.36, 39.21, 7.569, -25.22, 156, 38.0956, -3.54,];
let searchedValue1 = 7.569;
let searchedValue2 = 7.57;
let searchIndex1 = searchIndexRecursiveRawData(sampleData, searchedValue1, 0, sampleData.length - 1);
let searchIndex2 = searchIndexRecursiveRawData(sampleData, searchedValue2, 0, sampleData.length - 1);

console.log(`The index for "${searchedValue1}" is "${searchIndex1 !== null ? searchIndex1 : 'not found'}".`);

console.log(`The index for "${searchedValue1}" is "${searchIndex2 !== null ? searchIndex2 : 'not found'}".`);
}