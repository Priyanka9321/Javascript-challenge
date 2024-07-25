// DAY 13: Modules
// Activity 1 : Creating and Exporting Modules
// Task 1
import add from './mathModule.js';

let num1 = 10, num2 = 20;
let result = add(num1, num2);
console.log(`The result of adding ${num1} and ${num2} is ${result}`);

// Task 2
import person from './personModule.js'

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
person.greet();

// Activity 2 : Named and Default Exports
// Task 3
import { subtract, multiply, divide } from './mathFunction.js';

let a = 10, b = 5;
console.log(`Subtracting ${a} from ${b} gives ${subtract(a, b)}`);
console.log(`Multiplying ${a} and ${b} gives ${multiply(a, b)}`);
console.log(`Dividing ${a} by ${b} gives ${divide(a, b)}`);

// Task 4
import greet from './singleFunctionModule.js';

const name = 'John';
console.log(greet(name));

// Activity 3 : Importing Entire Modules 
// Task 5
import * as utils from './utilityModule.js';

console.log(`PI: ${utils.PI}`);
let remainder = utils.remainder(10, 20);
console.log("remainder:", remainder);

// Activity 4 : Using Third-Party Modules 
// Task 6