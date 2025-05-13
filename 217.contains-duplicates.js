//217. Contains Duplicates
//given an array of integers. determine if there are duplicates

const containsDuplicates = (arr) => {
  return new Set(arr).size !== arr.length ? true : false;
};

//test cases
let arr1 = [1, 2, 3, 3]; //true
let arr2 = [1, 2, 3]; // false
let arr3 = [4, 1, 1, 5, 7, 4, 3]; //true
let arr4 = [4, 5, 1, 7, 9, 2, 3]; //false

console.log(duplicateDetector(arr1), true);
console.log(duplicateDetector(arr2), false);
console.log(duplicateDetector(arr3), true);
console.log(duplicateDetector(arr4), false);
