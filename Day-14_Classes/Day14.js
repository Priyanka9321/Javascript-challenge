// DAY 14: Classes
// Activity 1 : Class Definition
// Task 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to ${this.age}`);
  }

  // Static method
  static getGenericMessage() {
    return "This is a generic message from the Person class.";
  }

  // Getter method to return the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter method to set the full name
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Create an instance of the Person class
const personInstance = new Person("Priyanka", 20);

// Log the greeting message
console.log(personInstance.getGreeting());

// Task 2
// Update the age and log the updated age
personInstance.updateAge(31);

// Activity 2 : Class Inheritance
// Task 3
class Student extends Person {
  // Static property to keep track of the number of students created
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;

    // Increment the static property in the constructor
    Student.studentCount += 1;
  }

  getStudentId() {
    return this.studentId;
  }

  // Override the getGreeting method
  getGreeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}
// Create an instance of the Student class
const studentInstance = new Student("Priyanka", 20, "S12345");

// Log the student ID
console.log(studentInstance.getStudentId());

// Task 4
// Log the overridden greeting message
console.log(studentInstance.getGreeting());

// Activity 3 : Static Methods and Properties
// Task 5
// Call the static method without creating an instance of the class
console.log(Person.getGenericMessage());

// Task 6
// Log the total number of students created
console.log(`Total number of students: ${Student.studentCount}`);

// Activity 4 : Getters and Setters
// Task 7
// Log the full name using the getter
console.log(personInstance.fullName);

// Task 8
// Update the name using the setter
personInstance.fullName = "Ramkumar Yadav";

// Log the updated full name
console.log(`Updated full name: ${personInstance.fullName}`);

// Activity 5 : Private Fields (Optional)
// Task 9
class Account {
  #balance; // Private field for balance

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
  }

  // Method to get the current balance
  getBalance() {
    return this.#balance;
  }
}

// Create an instance of the Account class
const myAccount = new Account(100);

// Deposit money
myAccount.deposit(50);
console.log(`Balance after deposit: Rs.${myAccount.getBalance()}`);

// Withdraw money
myAccount.withdraw(30);
console.log(`Balance after withdrawal: Rs.${myAccount.getBalance()}`);

// Try to directly access the private balance (this will cause an error)
// console.log(myAccount.#balance); // Uncommenting this line will throw a syntax error



