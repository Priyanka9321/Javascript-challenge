// DAY 5: Functions
// Activity 1 : Function Declaration
// Task 1
function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(`${number} is Even number.`);
    } else if (number == 0){
        console.log(`${number} is Zero number.`);
    } else {
        console.log(`${number} is Odd number.`);
    }
}
isEvenOrOdd(10);

// Task 2
function printSquare(number) {
    let square = number * number;
    console.log(`Square of the ${number} is ${square}.`);
}
printSquare(Number);

// Activity 2 : Function Expression
// Task 3
function findLargestNumber(num1, num2) {
    if (num1 < num2) {
        console.log(`${num2} is Largest number.`);
    } else {
        console.log(`${num1} is Largest number.`);
    }
}
findLargestNumber(10, 20);

// Task 4
function concatStrings(str1, str2) {
    return str1 + str2;
}
console.log(concatStrings("Priyanka ", "Yadav"));

// Activity 3 : Arrow Function
// Task 5
let num1 = 10, num2 = 20;
const sumOfTwoNumber = (a, b) => sum = a + b;
console.log(sumOfTwoNumber(num1, num2));

// Task 6
let string = "Priyanka", char = 'a';
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter(string, char));

// Activity 4 : Function Parameters and Default Values
// Task 7
function printProduct(a, b = 10) {
    return a * b;
} 
console.log("Product of two number is:", printProduct(5));

// Task 8
function personInfo(name, age = 20) {
    console.log(`Hello ${name},You are ${age} years old.`);
}
personInfo("Priyanka")

// Activity 5 : Higher-Order Functions
// Task 9
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
      fn();
    }
}
  
function sayHello() {
    console.log("Hello!");
}
repeatFunction(sayHello, 3); // "Hello!" will be printed 3 times

// Task 10
function applyFunctions(fn1, fn2, value) {
    const result1 = fn1(value);
    const result2 = fn2(result1);
    return result2;
}
  
function double(x) {
    return x * 2;
}
  
function square(x) {
    return x * x;
}

console.log(applyFunctions(double, square, 5));