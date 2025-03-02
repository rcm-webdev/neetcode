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
