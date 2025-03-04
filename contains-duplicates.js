// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

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
