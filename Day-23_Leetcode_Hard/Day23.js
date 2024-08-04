// Day 22: LeetCode Hard
// Activity 1: Median of Two Sorted Arrays

// Task 1: write a function that takes Two sorted arrays of integers and integers and returns the median of the two sorted arrays.

function findMedianSortedArrays(nums1, nums2) {
  // Helper function to merge two sorted arrays
  const merge = (arr1, arr2) => {
    let merged = [];
    let i = 0,
      j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i++]);
      } else {
        merged.push(arr2[j++]);
      }
    }

    while (i < arr1.length) {
      merged.push(arr1[i++]);
    }

    while (j < arr2.length) {
      merged.push(arr2[j++]);
    }

    return merged;
  };

  const mergedArray = merge(nums1, nums2);
  const len = mergedArray.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
}

console.log(findMedianSortedArrays([1, 3], [2])); // Example with odd length
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Example with even length
console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5])); // One empty array

console.log("Task 1 Ended Here!");

// Activity 2: Merge k Sorted Lists

// Task 2: write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  const minHeap = new MinHeap((a, b) => a.val - b.val);
  for (const list of lists) {
    if (list) minHeap.add(list);
  }

  let dummy = new ListNode();
  let current = dummy;

  while (!minHeap.isEmpty()) {
    const node = minHeap.poll();
    current.next = node;
    current = current.next;

    if (node.next) minHeap.add(node.next);
  }

  return dummy.next;
}

// MinHeap implementation
class MinHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  add(value) {
    this.heap.push(value);
    this._heapifyUp(this.heap.length - 1);
  }

  poll() {
    if (this.heap.length === 0) return null;
    const root = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._heapifyDown(0);
    }
    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _heapifyUp(index) {
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (this.compare(element, parent) >= 0) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  _heapifyDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swap = null;
      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];
        if (this.compare(leftChild, element) < 0) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && this.compare(rightChild, element) < 0) ||
          (swap !== null && this.compare(rightChild, this.heap[swap]) < 0)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }
}

function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function printLinkedList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function printLinkedList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

const list1 = createLinkedList([1, 4, 5]);
const list2 = createLinkedList([1, 3, 4]);
const list3 = createLinkedList([2, 6]);

const mergedList = mergeKLists([list1, list2, list3]);
console.log("Merged List:");
printLinkedList(mergedList);

console.log("Task 2 Ended Here!");

// Activity 3: Trapping Rain Water

// Task 3: write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.

function trap(height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        trappedWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        trappedWater += rightMax - height[right];
      }
      right--;
    }
  }

  return trappedWater;
}

console.log(trap([0, 3, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 12
console.log(trap([4, 2, 0, 3, 4, 5])); // 7

console.log("Task 3 Ended Here!");

// Activity 4: N-Queens

// Task 4: write a function that places n queens on an nxn chessboard such that no two queens attack each other, and return all distinct solutions to the n-queens puzzle.

function solveNQueens(n) {
  let result = [];
  let board = Array.from({ length: n }, () => Array(n).fill("."));

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  }

  function placeQueens(board, row) {
    if (row === n) {
      result.push(board.map((r) => r.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = "Q";
        placeQueens(board, row + 1);
        board[row][col] = ".";
      }
    }
  }

  placeQueens(board, 0);
  return result;
}

console.log(solveNQueens(4)); // Output all distinct solutions for 4-queens
console.log(solveNQueens(1)); // [["Q"]]

console.log("Task 4 Ended Here!");

// Activity 5: Word Ladder

// Task 5: write a function that takes a begin word, an and word an end dictionary of word, and find the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list

function ladderLength(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
    let [word, length] = queue.shift();

    if (word === endWord) return length;

    for (let i = 0; i < word.length; i++) {
      for (let charCode = 97; charCode <= 122; charCode++) {
        let newWord =
          word.slice(0, i) + String.fromCharCode(charCode) + word.slice(i + 1);

        if (wordSet.has(newWord)) {
          queue.push([newWord, length + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0

console.log("Task 5 Ended Here!");
