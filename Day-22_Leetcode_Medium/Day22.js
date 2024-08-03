// Day 22: LeetCode Medium
// Activity 1: Add Two Numbers

// Task 1: write a function that takes non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1,
    q = l2,
    current = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p ? p.val : 0;
    let y = q ? q.val : 0;
    let sum = carry + x + y;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummyHead.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
}

// Helper function to print linked list
function printLinkedList(node) {
    let result = [];
    while (node) {
      result.push(node.val);
      node = node.next;
    }
    console.log(result.join(' -> '));
}

// Test Case 1
let l1 = createLinkedList([2, 4, 3]); // Represents 342
let l2 = createLinkedList([5, 6, 4]); // Represents 465
let result = addTwoNumbers(l1, l2); // Should represent 807
printLinkedList(result); // Output: 7 -> 0 -> 8

// Test Case 2
l1 = createLinkedList([0]); // Represents 0
l2 = createLinkedList([0]); // Represents 0
result = addTwoNumbers(l1, l2); // Should represent 0
printLinkedList(result); // Output: 0

// Test Case 3
l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]); // Represents 9999999
l2 = createLinkedList([9, 9, 9, 9]); // Represents 9999
result = addTwoNumbers(l1, l2); // Should represent 10009998
printLinkedList(result); // Output: 8 -> 9 -> 9 -> 0 -> 0 -> 0 ->

console.log("Task 1 Ended Here!");

// Activity 2: Longest Substring Without Repeating Characters

// Task 2: Write a function that takes a string and returns the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charSet = new Set();

    for (let end = 0; end < s.length; end++) {
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        charSet.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

// Helper function to test and log results
function testLengthOfLongestSubstring(s) {
    console.log(`Input: "${s}"`);
    console.log(`Length of longest substring without repeating characters: ${lengthOfLongestSubstring(s)}`);
    console.log('---');
}

// Test Cases
testLengthOfLongestSubstring("abcabcbb"); // Should return 3 ("abc")
testLengthOfLongestSubstring("bbbbb");    // Should return 1 ("b")
testLengthOfLongestSubstring("");         // Should return 0 (Empty string)
testLengthOfLongestSubstring("a");        // Should return 1 (Single character)

console.log("Task 2 Ended Here!");

// Activity 3: Container Wuth Most Water

// Task 3: write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
      // Calculate the height and width of the container
      const h = Math.min(height[left], height[right]);
      const w = right - left;
      // Calculate the area
      const area = h * w;
      // Update the maximum water if the current area is larger
      maxWater = Math.max(maxWater, area);

      // Move the pointer with the shorter line
      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }
  return maxWater;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16

console.log("Task 3 Ended Here!");

// Activity 4: 3 Sum

// Task 4: write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.

function findZeroSumTriplets(arr) {
  const triplets = [];
  
  // Sort the array
  arr.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length - 2; i++) {
      // Skip duplicate values for the first element
      if (i > 0 && arr[i] === arr[i - 1]) continue;
      
      let left = i + 1;
      let right = arr.length - 1;
      
      while (left < right) {
          const sum = arr[i] + arr[left] + arr[right];
          
          if (sum === 0) {
              triplets.push([arr[i], arr[left], arr[right]]);
              
              // Skip duplicate values for the second and third elements
              while (left < right && arr[left] === arr[left + 1]) left++;
              while (left < right && arr[right] === arr[right - 1]) right--;
              
              left++;
              right--;
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }
  }
  
  return triplets;
}

// Test cases
console.log(findZeroSumTriplets([1, 2, -2, -1])); // []
console.log(findZeroSumTriplets([])); // []
console.log(findZeroSumTriplets([0, 0, 0, 0])); // [[0, 0, 0]]
console.log(findZeroSumTriplets([1, -1, 0])); // [[-1, 0, 1]]

console.log("Task 4 Ended Here!");

// Activity 5: Group Anagrams

// Task 5: write a function that takes an array of strings and groups anagrams together.

function groupAnagrams(words) {
  const anagramMap = new Map();
  
  for (const word of words) {
      // Sort the characters of the word and use it as a key
      const sortedWord = word.split('').sort().join('');
      
      if (!anagramMap.has(sortedWord)) {
          anagramMap.set(sortedWord, []);
      }
      
      anagramMap.get(sortedWord).push(word);
  }
  
  // Convert the grouped anagrams into an array of arrays
  return Array.from(anagramMap.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx"]));
// Output: [["abc", "bca", "cab"], ["xyz", "zyx"]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]

console.log(groupAnagrams([]));
// Output: []

console.log("Task 5 Ended Here!");



