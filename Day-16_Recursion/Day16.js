// DAY 16: Recursion
// Activity 1 : Basic Recursion
// Task 1
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Test cases
console.log("Factorial of 0:", factorial(0)); // 1
console.log("Factorial of 1:", factorial(1)); // 1
console.log("Factorial of 5:", factorial(5)); // 120

// Task 2
function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Test cases
console.log("Fibonacci of 0:", fibonacci(0)); // 0
console.log("Fibonacci of 1:", fibonacci(1)); // 1
console.log("Fibonacci of 5:", fibonacci(5)); // 5

// Activity 2 : Recursion with Array
// Task 3
function sumArray(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }
    // Recursive case: sum the first element with the sum of the rest of the array
    return arr[0] + sumArray(arr.slice(1));
}
// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, -5, 2, 3])); // Output: 10
console.log(sumArray([])); // Output: 0

// Task 4 
function findMax(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 1) {
        return arr[0];
    }
    // Recursive case: find the maximum of the rest of the array
    const maxOfRest = findMax(arr.slice(1));

    // Return the maximum of the first element and the maximum of the rest of the array
    return Math.max(arr[0], maxOfRest);
}
// Test cases
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMax([10, -5, 2, 3])); // Output: 10
console.log(findMax([-1, -2, -3, -4])); // Output: -1

// Activity 3 : String Manipulation with Recursion
// Task 5
function reverseString(str) {
    // Base case: if the string is empty or has only one character, return it as is
    if (str.length <= 1) {
        return str;
    }
    // Recursive case: reverse the rest of the string and append the first character
    return reverseString(str.slice(1)) + str[0];
}
// Test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("a")); // Output: "a"
console.log(reverseString("")); // Output: ""

// Task 6
function isPalindrome(str) {
    // Normalize the string by removing non-alphanumeric characters and converting to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Base Case: if the string has zero or one character, it's a palindrome
    if (cleanedStr.length <= 1) {
       return true; 
    }

    // Recursive case: compare the first and last characters
    if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
        // Check the substring without the first and last characters
        return isPalindrome(cleanedStr.slice(1, -1));
    } else {
        return false;
    }
}
// Test cases
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

// Activity 4 : Recursive Search
// Task 7
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the range is invalid
    if(left > right) {
        return -1; // Target not found
    }

    // Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Base case: if the target is at the middle index
    if (arr[mid] === target) {
        return mid;
    }

    // Recursive case: search in the left or right half
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1); // Search in the left half
    } else {
        return binarySearch(arr, target, mid + 1, right); // Search in the right half
    }
}
// Test cases
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // Output: 4
console.log(binarySearch([1, 3, 5, 7, 9, 11], 1)); // Output: 0
console.log(binarySearch([], 5)); // Output: -1

// Task 8
function countOccurrences(arr, target, index = 0) {
    // Base case: if the index is out of bounds, return 0
    if (index >= arr.length) {
        return 0;
    }

    // Recursive case: check if the current element matches the target
    const count = (arr[index] === target ? 1 : 0) + countOccurrences(arr, target, index + 1);

    return count;
}
// Test cases
console.log(countOccurrences([1, 2, 3, 4, 5, 2, 2, 6, 2], 2)); // Output: 4
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0
console.log(countOccurrences([], 5)); // Output: 0
