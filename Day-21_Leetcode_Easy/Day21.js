// Day 21: LeetCode Easy
// Activity 1: Two Sum

// Task 1: write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.

function findTwoSumIndices(nums, target) {
    const numToIndex = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }
    
    return null; // No solution found
}
// Test cases
console.log(findTwoSumIndices([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(findTwoSumIndices([3, 2, 4], 6)); // Output: [1, 2]
console.log(findTwoSumIndices([3, 3], 6)); // Output: [0, 1]

console.log("Task 1 Ended Here");

// Activity 2: Reverse Integer 

// Task 2: write a function that takes an integer and returns it with its digits reversed. Handle edge cases like negative numbers and numbers ending in zero.

function reverseInteger(num) {
    // Handle edge case of zero
    if (num === 0) return 0;

    // Determine if the number is negative
    const isNegative = num < 0;

    // Convert number to string and remove negative sign for processing
    let str = Math.abs(num).toString();

    // Reverse the string representation of the number
    let reversedStr = str.split('').reverse().join('');

    // Convert reversed string back to number
    let reversedNum = parseInt(reversedStr, 10);

    // Restore the negative sign if necessary
    if (isNegative) reversedNum = -reversedNum;

    // Return reversed number
    return reversedNum;
}
// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-456)); // Output: -654
console.log(reverseInteger(130)); // Output: 31
console.log(reverseInteger(0)); // Output: 0

console.log("Task 2 Ended Here!");

// Activity 3: Palindrome Number 

// Task 3: write a function that takes an integer and returns true if it is a palindrome add false otherwise.

function isPalindrome(num) {
    // Handle edge case of negative numbers
    if (num < 0) return false;

    // Convert number to string
    const str = num.toString();
    
    // Reverse the string and compare it to the original string
    const reversedStr = str.split('').reverse().join('');
    
    return str === reversedStr;
}
// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(0)); // Output: true

console.log("Task 3 Ended Here!");

// Activity 4: Merge Two Sorted Lists

// Task 4: write a function that takes two sorted linked lists and returns a new sorted list by merging them.

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    // Create a dummy node to simplify the merge process
    const dummy = new ListNode();
    let current = dummy;

    // Traverse both lists and append the smaller node to the merged list
    while (l1 !== null && l2 !== null) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append any remaining nodes from l1 or l2
    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

// Helper function to print a linked list
function printList(node) {
    const values = [];
    while (node !== null) {
        values.push(node.value);
        node = node.next;
    }
    console.log(values.join(' -> '));
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList = mergeTwoLists(l1, l2);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

console.log("Task 4 Ended Here!");

// Activity 5: Valid Parentheses 

// Task 5: write a function that takes a string containing just the characters "(",")","{","}","["and"]" and determines if the input string is valid.

function isValid(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true

console.log("Task 5 Ended Here!");