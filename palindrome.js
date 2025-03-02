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
