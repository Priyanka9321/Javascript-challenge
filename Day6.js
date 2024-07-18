// DAY 6: Arrays
// Activity 1 : Array Creation and Access
// Task 1
let arr = [1,2,3,4,5];
console.log("The arr:",arr);

// Task 2
console.log("First Element:", arr[0]);
console.log("Last Element:", arr[arr.length-1]);

// Activity 2 : Array Methods (basic)
// Task 3
console.log("Old Array:",arr);
arr.push(6);
console.log("Updated Array:",arr);

// Task 4
console.log("Old Array:",arr);
arr.pop();
console.log("Updated Array:",arr);

// Task 5
console.log("Old Array:",arr);
arr.shift();
console.log("Updated Array:",arr);

// Task 6
console.log("Old Array:",arr);
arr.unshift(11);
console.log("Updated Array:",arr);

// Activity 3 : Array Methods (Intermediate)
// Task 7
const doubledArray = arr.map((num) => num * 2);
console.log("Array with each element doubled:",doubledArray);

// Task 8 
const evenNumberArray = arr.filter((num) => num % 2 == 0);
console.log("Array with only even element:",evenNumberArray);

// Task 9
const sumOfArray = arr.reduce((sum, curr) => sum + curr, 0);
console.log("Sum of all elements in the Array:",sumOfArray);

// Activity 4 : Array Iteration
// Task 10
console.log("Printing array element using for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Task 11
arr.forEach(element => {
    console.log(element);
});

// Activity 5 : Multi-dimensional Array
// Task 12
let matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
]
console.log("Multi-dimensional Array");
console.log(matrix);

// Task 13
const specificElement = matrix[0][1];
console.log("Accessing element at row 1, column 2:",specificElement);