// DAY 8: ES6 + Features
// Activity 1 : Template Literals
// Task 1
const name = "Priyanka";
const age = 20;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Task 2
console.log(`This is a multi-line string.
You can write across multiple lines
without needing any special characters.
It's quite useful for creating readable strings.`);

// Activity 2 : Distructuring
// Task 3
const number = [11,12,13,14,15];
const [first, second] = number;
console.log(`First element:${first}`);
console.log(`Second element:${second}`);

// Task 4
const book = {
    title: "One India Girl",
    author: "Chetan Bhagat",
    year: 2016
}
const { title, author } = book;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

// Activity 3 : Spread and Rest Operators
// Task 5
const array = [...number, 80, 70, 30]
console.log(array);

// Task 6
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}
const result = sumAll(1,2,3,4,5);
console.log(`sum of the all element is ${result}.`);

// Activity 4 : Default Parameters
// Task 7
function multiply(a, b = 1) {
    return a * b;
}
const resultWithBoth = multiply(5, 2);
console.log(`Result with both parameters: ${resultWithBoth}`); 

const resultWithOne = multiply(5);
console.log(`Result with only the first parameter: ${resultWithOne}`); 

// Activity 5 : Enhanced Object Literals
// Task 8
const firstName = "Priyanka";
const lastName = "Yadav";

const person = {
  firstName,
  lastName,
  greet() {
    console.log(`Hello,Good Morning ${this.firstName} ${this.lastName}.`);
  },
  updateName() {
    this.firstName = "Sneha";
  }
};
console.log(person);
person.greet();
