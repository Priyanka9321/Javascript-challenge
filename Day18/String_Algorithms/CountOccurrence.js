// Activity 3: String Algorithms
// Task 6
function countCharOccurrences(str) {
    let charCount = {};

    for (let char of str) {
       // Increment the count for each character
       if (charCount[char]) {
          charCount[char]++;
       } else {
          charCount[char] = 1;
       } 
    }
    return charCount;
}

// Example usage:
const inputString = "hello world";
const characterCounts = countCharOccurrences(inputString);

// Log the character counts
console.log("Character counts:", characterCounts);