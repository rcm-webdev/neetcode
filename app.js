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

// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

//create a function that is palindome

const isPalindrome = (s) => {
  let str = s
    .toLowerCase()
    .split("")
    .filter((char) => {
      return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
    })
    .join("");

  return str == str.split("").reverse().join("");
};

console.log(isPalindrome(",,.bob.bo,b"), true);
console.log(isPalindrome("racecar"), true);
console.log(isPalindrome("racecar.racecar"), true);
console.log(isPalindrome("bobby"), false);
