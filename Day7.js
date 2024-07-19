// DAY 7: Objects
// Activity 1 : Object Creation and Access
// Task 1
const Book = {
  title: "One India Girl",
  author: "Chetan Bhagat",
  year: 2016,

  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },

  updateYear: function (newYear) {
    this.year = newYear;
  },
};
console.log(Book);

// Task 2
console.log("Title of the book is:", Book.title);
console.log("Author of the book is:", Book.author);

// Activity 2 : Object Methods
// Task 3
console.log(Book.getDetails());

// Task 4
Book.updateYear(2020);
console.log(Book);

// Activity 3 : Nested Object
// Task 5
const library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,

      getTitleAndYear: function (){
        return `${this.title} (${this.year})`
      }
    },
    {
      title: "Half Girlfriend",
      author: "George Orwell",
      year: 1949,

      getTitleAndYear: function (){
        return `${this.title} (${this.year})`
      }
    },
  ],
};
console.log(library);

// Task 6
console.log(library.name);

library.books.forEach(book => {
  console.log(book.title);
});

// Activity 4 : The this Keyword
// Task 7
library.books.forEach((book) => {
  console.log(book.getTitleAndYear());
})

// Activity 5 : Object Iteration
// Task 8
for(let prop in Book) {
  console.log(`${prop}: ${Book[prop]}`);
}

// Task 9
console.log("Keys:", Object.keys(Book));
console.log("Keys:", Object.values(Book));