// script.js //

let myLibrary = [];  // array to store books

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.displayInfo = function () {
    console.log(`${this.title} by ${this.author}, is ${this.pages} pages, and is ${this.isRead}.`);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        console.table(myLibrary[i]);
    }
}

// Test books for development
let testBook1 = new Book('The Hobbit', 'J.R.R. Tolkien', 324, 'not read');
let testBook2 = new Book('The Name of the Wind', 'Patrick Rothfuss', 451, 'read');
let testBook3 = new Book('The Wise Man\'s Fear', 'Patrick Rothfuss', 275, 'not read');
// Add test books to library
addBookToLibrary(testBook1);
addBookToLibrary(testBook2);
addBookToLibrary(testBook3);

testBook1.displayInfo();
