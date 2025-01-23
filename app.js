//list of Neetcode problems sovled with JavaScript

// 1.23.25
//Contains duplicates
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

const duplicatesPresent = (nums) => {
  return new Set(nums).size !== nums.length;
};

let arr1 = [1, 2, 3, 4, 5, 5];
let arr2 = [3, 5, 1, 3, 4, 2];
let arr3 = [1, 2, 3, 4, 5, 6];

//test cases

console.log(duplicatesPresent(arr1), true);
console.log(duplicatesPresent(arr2), true);
console.log(duplicatesPresent(arr3), false);
