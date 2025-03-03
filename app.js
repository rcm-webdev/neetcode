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

//2620. Counter
//Sunday 3.2.2025

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// Example 2:

// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

//given an integer, n
//always positive, whole, always there, no str, no special chars, no funny biz
//return n + 1, and add subsequently
// 10 > 11, call function > 12, call function > 13, etc

const createCounter = (n) => {
  let count = n;
  return function () {
    return count++;
  };
};

let counter = createCounter(10);
console.log(counter(), 10);
console.log(counter(), 11);
console.log(counter(), 12);
console.log(counter(), 13);
