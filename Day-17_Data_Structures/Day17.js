// DAY 17: Data Structures
// Activity 1 : Linked List
// Task 1
console.log("Implementing Node");
class Node {
  constructor(value) {
    this.value = value; // Stores the value of the node
    this.next = null; // Points to the next node in the list
  }
}
// Example usage:
const firstNode = new Node(10);
const secondNode = new Node(20);
firstNode.next = secondNode;

console.log("FirstNode: ",firstNode.value); // 10
console.log("SecondNode: ",firstNode.next.value); // 20

// Task 2
console.log("Implementing LinkedList");
class LinkedList {
  constructor() {
    this.head = null; // Points to the first node in the list
    this.tail = null; // Points to the last node in the list
  }

  // Method to add a node to the end of the list
  add(value) {
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode; // If the list is not empty, update the current tail's next reference
    }
    this.tail = newNode; // Update the tail to the new node
    if (!this.head) {
      this.head = newNode; // If the list was empty, update the head to the new node
    }
  }

  // Method to remove a node from the end of the list
  remove() {
    if (!this.head) {
      return; // List is empty
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null; // List had only one node
      return;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next; // Traverse the list to find the second-to-last node
    }
    current.next = null; // Remove reference to the last node
    this.tail = current; // Update the tail to the new last node
  }

  // Method to display all nodes in the list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next; // Move to the next node
    }
  }
}

// Example usage:
const list = new LinkedList();
console.log("Adding element in LinkedList: ");
list.add(10);
list.add(20);
list.add(30);
list.display(); // 10 20 30
console.log("Remove Last Node: ");
list.remove();
console.log("Displaying LinkedList: ");
list.display(); // 10 20

// Activity 2 : Stack
// Task 3
console.log("Implementing Stack");
class Stack {
  constructor () {
    this.items = []; // Array to store stack elements
  }

  // Method to add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Method to remove and return the top element from the stack
  pop () {
    if (this.isEmpty()) {
      throw new Error('Stack is empty.');
    }
    return this.items.pop();
  }

  // Method to view the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error ('Stack is empty.')
    }
    return this.items[this.items.length - 1];
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to display all elements in the stack
  display() {
    console.log(this.items);
  }
}
// Example usage:
const stack = new Stack();
console.log("Adding element in Stack: ");
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
console.log("Removing element from stack: ");
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log("Displaying Stack: ");
stack.display(); // [10, 20]

// Task 4
// Function to reverse a string using the Stack class
function reverseString(str) {
  // Debugging: Check the type of str
  console.log('Type of str:', typeof str); 

  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  const stack = new Stack();

  // Push each character of the string onto the stack
  for (let char of str) {
    stack.push(char);
  }

  // Pop characters off the stack and concatenate them
  let reversedStr = '';
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}
// Example 
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log("Reverse String", reversedString); // "olleh"

// Activity 3 : Queue
// Task 5
console.log("Implementing Queue");
class Queue {
  constructor () {
    this.items = []; // Array to store queue elements
  }

  // Method to add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Method to remove and return the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.items.shift(); // Remove the first element from the array
  }

  // Method to view the element at the front of the queue without removing it
  front() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.items[0]; // Return the first element in the array
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to display all elements in the queue
  display() {
    console.log(this.items);
  }
}
// Example usage:
const queue = new Queue();
console.log("Adding element in the queue: ");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("front:", queue.front()); // 10
console.log("Removing Element from queue: ");
console.log(queue.dequeue()); // 10
console.log("front:", queue.front()); // 20
console.log("Displaying Queue: ");
queue.display(); // [20, 30]

// Task 6
// Function to simulate a printer queue
function printJobs() {
  const printerQueue = new Queue();

  // Add print jobs to the queue
  printerQueue.enqueue('Document1.pdf');
  printerQueue.enqueue('Document2.pdf');
  printerQueue.enqueue('Document3.pdf');

  console.log('Printer Queue:', printerQueue.items);
  
  // Process (print) each job in the queue
  while (!printerQueue.isEmpty()) {
    const job = printerQueue.dequeue(); // Remove the job from the front of the queue
    console.log(`Printing: ${job}`);
  }
}
// Run the printer queue simulation
printJobs();

// Activity 4 : Binary Tree
// Task 7
console.log("Implementing Tree Node");
class TreeNode {
  constructor (value) {
    this.value = value; // Stores the value of the node
    this.left = null; // Points to the left child node
    this.right = null; // Points to the right child node
  }
}
// Example usage:
const root = new TreeNode(10);
const leftChild = new TreeNode(5);
const rightChild = new TreeNode(15);
root.left = leftChild;
root.right = rightChild;

console.log('Root node value:', root.value); // 10
console.log('Left child value:', root.left.value); // 5
console.log('Right child value:', root.right.value); // 15

// Task 8
console.log("Implementing Binary Tree");
class BinaryTree {
  constructor() {
    this.root = null; // Root of the binary tree
  }

  // Method to insert a new value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode; // If the tree is empty, set the root
    } else {
      this._insertNode(this.root, newNode); // Otherwise, insert the node
    }
  }

  // Helper method to insert a node starting from a given root
  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // Insert in the left subtree
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      // Insert in the right subtree
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  // Method for in-order traversal of the binary tree
  inOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);  // Visit left subtree
      result.push(node.value);                   // Visit node itself
      this.inOrderTraversal(node.right, result); // Visit right subtree
    }
    return result;
  }

  // Method to display the in-order traversal of the binary tree
  displayInOrder() {
    const result = this.inOrderTraversal();
    console.log(result.join(' -> ')); // Display values in order
  }
}

// Example usage:
const tree = new BinaryTree();
console.log("Adding elements: ");
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
tree.insert(3);
console.log('In-Order Traversal of Binary Tree:');
tree.displayInOrder(); // Output: 3 -> 5 -> 7 -> 10 -> 15
