// Activity 4: Array Algorithms
// Task 8

function rotateArray(arr, k) {
    const n = arr.length;
    
    // Normalize k to ensure it is within the range of 0 to n-1
    k = k % n;
    
    if (k === 0) {
        return arr; // No rotation needed
    }
    
    // Rotate the array
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    
    return rotatedArray;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log("Original array:", array);
const rotatedArray = rotateArray(array, k);
console.log("Rotated array:", rotatedArray);
