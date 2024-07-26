// Day 3: Control Structures
// Activity 1 : If-Else Statements
// Task 1
let num = -10;
if (num > 0) {
  console.log(`${num} is Positive.`);
} else if (num < 0) {
  console.log(`${num} is Negative`);
} else {
  console.log(`${num} is Zero`);
}

// Task 2
let age = 16;
if (age >= 18) {
  console.log("You are eligible for vote.");
} else {
  console.log("You are not eligible for vote.");
}

// Activity 2 : Nested If-Else Statements
// Task 3
let a = 10,
  b = 20,
  c = 35;
if (a >= b && a >= c) {
  console.log(`${a} is the largest Number.`);
} else if (b >= a && b >= c) {
  console.log(`${b} is the largest Number.`);
} else {
  console.log(`${c} is the largest Number.`);
}

// Activity 3 : Switch Case
// Task 4
let dayNumber = 2;
switch (dayNumber) {
  case 1:
    dayNumber = "Monday";
    break;
  case 2:
    dayNumber = "Tuesday";
    break;
  case 3:
    dayNumber = "Wednesday";
    break;
  case 4:
    dayNumber = "Thursday";
    break;
  case 5:
    dayNumber = "Friday";
    break;
  case 6:
    dayNumber = "Saturday";
    break;
  case 7:
    dayNumber = "Sunday";
    break;
  default:
    dayNumber = "Invalid day number";
    break;
}
console.log(dayNumber);

// Task 5
let score = 80;
switch (true) {
  case (score >= 90 && score <= 100):
    grade = "A";
    break;
  case (score >= 80 && score < 90):
    grade = "B";
    break;
  case (score >= 70 && score < 80):
    grade = "C";
    break;
  case (score >= 60 && score < 70):
    grade = "D";
    break;
    default:
    grade = "Invalid score";
}
console.log(grade);

// Activity 4 : Conditional (Ternary) Operator
// Task 6
let number = 11;
const result = (number % 2 === 0) ? 'Even' : 'Odd';
console.log(result);

// Activity 5 : Combining Conditions
// Task 7
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}