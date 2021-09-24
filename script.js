// script.js //

let myLibrary = [];  // array to store books

function Book(title, author, num_pages, isRead) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.isRead = isRead;
}

Book.prototype.displayInfo = function () {
    // console.log(`${this.title} by ${this.author}, is ${this.pages} pages, and is ${read}.`);
    console.log(this.title);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    for (let entry in myLibrary) {
        entry.display();
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
