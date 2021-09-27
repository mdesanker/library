// script.js //
// let myLibrary = []

let myLibrary = [
    { title: 'The Lion, the Witch, and the Wardrobe', author: 'Lewis', status: 'read' }
]

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
const libraryTable = document.querySelector('tbody');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    clearForm();
})

function clearForm() {
    bookTitle.value = '';
    bookAuthor.value = '';
}

function addBookToLibrary() {
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookStatus.value);
    myLibrary.push(newBook);
}

function changeStatus() {
    // Add change read status function
    // Update table display
}

function display() {
    libraryTable.innerHTML = '';
    for (j = 0; j < myLibrary.length; j++) {
        // myLibrary.forEach((book) => {
        let newRow = libraryTable.insertRow();
        for (i = 0; i < 4; i++) {
            let newCell = newRow.insertCell();
            switch (i) {
                case 0:
                    newCell.textContent = myLibrary[j].title;
                    break;
                case 1:
                    newCell.textContent = myLibrary[j].author;
                    break;
                case 2:
                    const statusBtn = document.createElement('button');
                    statusBtn.classList.add('status-btn');
                    statusBtn.textContent = myLibrary[j].status;
                    newCell.append(statusBtn);
                    break;
                case 3:
                    const deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('delete-btn');
                    deleteBtn.textContent = 'Delete';
                    newCell.append(deleteBtn);
            }
        }
    }
}