// Day 2: Operators
// Activity 1: Arithmetic Operations
// Task 1
let a = 10, b = 20;
console.log(`sum of two number is ${a + b}.`);

// Task 2
console.log(`subtraction of two number is ${a - b}.`);

// Task 3
console.log(`multiplication of two number is ${a * b}.`);

// Task 4
console.log(`division of two number is ${a / b}.`);

// Task 5
console.log(`remainder of two number is ${b % a}.`);

// Activity 2: Assignment Operators
// Task 6
let num = 5;
num += 10;
console.log(num);

// Task 7
num -= 10
console.log(num);

// Activity 3: Comparison Operators
// Task 8
let num1 = 10, num2 = 20;
console.log(num1 > num2); //false
console.log(num1 < num2); //true

// Task 9
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true

// Task 10
console.log(10 == "10"); //true
console.log(10 === "10"); //false

// Activity 4: Logical Operators
// Task 11
let condition1 = true;
let condition2 = false;
let result =  condition1 && condition2
console.log("The result of combining the two conditions is:", result); //false

// Task 12
result = condition1 || condition2
console.log("The result of combining the two conditions is:", result); //true

// Task 13
result = !condition1
console.log(result); //false

// Activity 5: Ternary Operator
// Task 14
let c = 10;
console.log((c >= 0) ? "The number is positive" : "The number is negative");


