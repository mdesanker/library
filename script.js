// script.js //
let myLibrary = []

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

Book.prototype.displayInfo = function () {
    console.log(`${this.title} by ${this.author}, and is ${this.status}.`);
}

// Test books
const book1 = new Book("The Lion, the Witch, and the Wardrobe", "Lewis", "read");
// addBookToLibrary(book1);

// FORM JS //
const bookTitle = document.querySelector('#title-input');
const bookAuthor = document.querySelector('#author-input');
const bookStatus = document.querySelector('#status-select');
const form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    // const newBook = new Book(bookTitle.value, bookAuthor.value, bookStatus.value);
    // addBookToLibrary(newBook);
    // alert(`${myLibrary[1].title} by ${myLibrary[1].author}, and is ${myLibrary[1].status}.`);
})

function clearForm() {

}

function addBookToLibrary() {
    if (!bookTitle.value && !bookAuthor.value) {
        alert('Please fill in all the fields');
        return;
    }
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookStatus.value);
    myLibrary.push(newBook);
}