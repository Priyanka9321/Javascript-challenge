// DAY 15: Closures
// Activity 1 : Understanding Closures
// Task 1
function outerFunction() {
    const outerVariable = "I am from the outer scope";
    function innerFunction() {
        return outerVariable;
    }
    return innerFunction;
}

// Call the outer function to get the inner function
const myInnerFunction = outerFunction();

// Call the inner function and log the result
console.log(myInnerFunction());

// Task 2
function createCounter () {
    let counter = 0;
    return {
        increment: function () {
            counter++;
        },
        getValue: function () {
            return counter;
        }
    }
}
// Create a new counter instance
const myCounter = createCounter();

// Increment the counter and log the current value
myCounter.increment();
console.log(myCounter.getValue()); // Output: 1


// Activity 2 : Practical Closures
// Task 3
function createIdGenerator() {
    lastId = 10; // Initialize the last generated ID

    return function() {
        lastId+=2000; // Increment the last generated ID
        return lastId; // Return the new unique ID
    }
}
// Create a new ID generator instance
const generateId = createIdGenerator();

// Generate and log unique IDs
console.log(generateId()); // Output: 2010 

// Task 4
function createGreeting(username) {
    return function () {
        return `Hello, ${username}!`;
    }
}
// Create a greeting function for a specific user
const greetPriyanka = createGreeting("Priyanka");

// Call the greeting function and log the result
console.log(greetPriyanka()); // Output: Hello, Priyanka!


// Activity 3 : Closures in Loops
// Task 5
function createLoggingFunctions () {
    const functions = [];
    for (let i = 1; i <= 10; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            }
        }) (i));
    }
    return functions;
}
// Create the array of logging functions
const loggingFunctions = createLoggingFunctions();

// Call each function to log its index
for (let j = 0; j < loggingFunctions.length; j++) {
    loggingFunctions[j](); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}


// Activity 4 : Module Pattern
// Task 6
function createCollectionManager () {
    const items = []; // Private variable to store items
    return {
        addItem: function(item){
            items.push(item);
        },
        removeItem: function(item) {
            let index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1)
            }
        },
        listItem: function() {
            return items.slice(); // Return a copy of the items array
        }
    }
}
// Create a collection manager instance
const collectionManager = createCollectionManager();

// Add items to the collection
collectionManager.addItem("Apple");
collectionManager.addItem("Mango");
collectionManager.addItem("banana");

// List items in the collection
console.log(collectionManager.listItem()); // Output: ["Apple", "Mango", "Banana"]

// Remove an item from the collection
collectionManager.removeItem("Apple");

// After remove item List items in the collection
console.log(collectionManager.listItem()); // Output: ["Mango", "Banana"]


// Activity 5 : Memoization
// Task 7
function memoize (fn) {
    const cache = new Map(); // Private cache to store results

    return function(...args) {
        const key = JSON.stringify(args); // Create a cache key from arguments
        if (cache.has(key)) {
            // Return cached result if it exists
            return cache.get(key);
        }
        // Compute result if not cached
        const result = fn(...args);
        cache.set(key, result); // Store result in cache
        return result;
    };
}
// Example usage with an expensive function
function slowFunction(num) {
    // Simulate a time-consuming computation
    for (let i = 0; i < 1e7; i++) {
        return num * 2;
    } 
}
// Create a memoized version of the slowFunction
const memoizedSlowFunction = memoize(slowFunction);

// Call a memoized version of the slowFunction
console.log(memoizedSlowFunction(5)); //Expensive computation, then output: 10
console.log(memoizedSlowFunction(5)); // Immediate result from cache: 10

// Task 8
// Function to compute factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Test the memoized factorial function
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (cached result)

































































































































































































































































































































































































































































































































































































































































































































































































































































































