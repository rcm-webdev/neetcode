//412. Fizz Buzz
//create a function that will read an integer (n) and return a string
//return 'fizz' if integer is divisible by 3, 'buzz' if divisible by 5, and 'fizzbuzz' if divisible by 3 and 5, or return an integer as a string

const fizzBuzz = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("fizzbuzz");
    } else if (i % 3 == 0) {
      result.push("fizz");
    } else if (i % 5 == 0) {
      result.push("buzz");
    } else {
      result.push(`${i}`);
    }
  }
};

//test cases

let num1 = 5; //'1','2',fizz, '4', buzz
let num2 = 15; //'1','2',fizz,'4',buzz,fizz,'7','8',fizz,buzz,'11',fizz,'13','14',fizzbuzz
let num3 = 3; //'1','2',fizz

console.log(fizzBuzz(num1));
console.log(fizzBuzz(num2));
console.log(fizzBuzz(num3));
