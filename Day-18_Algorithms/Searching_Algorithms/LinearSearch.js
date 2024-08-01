// Activity 2 : Searching Algorithms
// Task 4
console.log("implementing the Linear Search algorithm");
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target value
        }
    }
}

// Example usage:
const numbers = [34, 78, 12, 45, 23];
const target = 45;

console.log("Array:", numbers);
const index = linearSearch(numbers, target);

if (index !== -1) {
    console.log(`Target value ${target} found at index ${index}.`);
} else {
    console.log(`Target value ${target} not found in the array.`);
}