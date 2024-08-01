// Task 5
console.log("implementing the Binary Search algorithm");
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index of the target value
        }

        if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Return -1 if the target value is not found
}

// Example usage:
const numbers = [12, 23, 34, 45, 78]; // The array must be sorted for binary search to work
const target = 45;

console.log("Array:", numbers);
const index = binarySearch(numbers, target);

if (index !== -1) {
    console.log(`Target value ${target} found at index ${index}.`);
} else {
    console.log(`Target value ${target} not found in the array.`);
}