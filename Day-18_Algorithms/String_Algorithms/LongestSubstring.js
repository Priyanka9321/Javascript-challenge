// Task 7
function lengthOfLongestSubstring(s) {
    let start = 0; // Start index of the sliding window
    let maxLength = 0; // Maximum length of substring found
    const charSet = new Set(); // Set to store unique characters

    for (let end = 0; end < s.length; end++) {
        // If the character is already in the set, remove characters from the start
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        
        // Add the current character to the set
        charSet.add(s[end]);
        
        // Update the maximum length if the current window is larger
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

// Example usage:
const inputString = "abcabcbb";
const longestSubstringLength = lengthOfLongestSubstring(inputString);

console.log("Length of longest substring without repeating characters:", longestSubstringLength);
   
