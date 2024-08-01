// Task 2
const person = {
    name: 'Priyanka',
    age: 20,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

export default person;