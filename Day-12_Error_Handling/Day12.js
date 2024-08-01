// DAY 12: Error Handling
// Activity 1 : Basic Error Handling with Try-Catch
// Task 1
function throwError() {
    throw new Error("This is an intentional error");
}
try {
    throwError();
} catch (error) {
    console.error("An error occurred:", error.message);
}

// Task 2
function divideNumber(numerator, denominator) {
    if (denominator == 0) {
        throw new Error("Division by zero is not allowed");
    }
    return numerator / denominator;
}
try {
    const result = divideNumber(10, 0); // Change 0 to any non-zero value to avoid the error
    console.log("result:", result);
} catch (error) {
    console.error("An error occurred: ", error.message); 
}

// Activity 2 : Finally Block
// Task 3
function exampleFunction () {
    throw new Error("This is an intentional error");
}
try {
    console.log("Entering try block");
    exampleFunction();
    console.log("This line will not execute because an error occurred above");
} catch (error) {
    console.error("An error occurred in the catch block: ", error.message);
} finally {
    console.log("Entering finally block - this always executes");
}
console.log("Code after try-catch-finally block");

// Activity 3 : Custom Error Object
// Task 4
// Define a custom error class
class CustomError extends Error {
    constructor(message){
        super(message);
        this.name = "CustomError";
    }
}
function throwErrorFunction() {
    throw new CustomError("This is a custom error");
}
try {
    throwErrorFunction(); // This will throw a CustomError
} catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a CustomError: ", error.message);
    } else {
      console.error("Caught an unexpected error: ", error.message);
    }
}

// Task 5
// Define a custom error class
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
}
// Function to validate user input
function validateInput (input) {
    if (input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }
    return true;
}
try {
    const userInput = "";
    validateInput(userInput); // This will throw a ValidationError if input is empty
    console.log("Input is valid");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation error: ", error.message);
    } else {
        console.error("Unexpected error: ", error.message);
    }
}

// Activity 4 : Error Handling in Promises
// Task 6
// Function that returns a promise which randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() >= 0.5; //Randomly decide if it should resolve or reject
        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully");
            } else {
                reject(new Error("Promise was rejected"));
            }
        }, 2000);
    })
};
// Use the promise and handle rejection with .catch()
randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("An error occurred: ", error.message);
    })

// Task 7
// Async function that uses try-catch to handle promise errors
async function handleRandomPromise () {
    try {
       const message = await randomPromise();
       console.log(message);
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
}
// Call the async function
handleRandomPromise();

// Activity 5 : Graceful Error Handling in Fetch
// Task 8
// Invalid URL for demonstration
const invalidUrl = "https://invalid-url.com/data";

// Use the fetch API to request data from the invalid URL
fetch(invalidUrl)
    .then((response) => {
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log("Data received: ", data);
    })
    .catch((error) => {
        console.error("An error occurred: ", error.message);
    })

// Task 9
// Async function that uses fetch to request data and handles errors with try-catch
async function fetchData(){
    try {
        const response = await fetch(invalidUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received: ", data);
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
}

// Call the async function
fetchData();