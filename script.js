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

// Test books for development
// Create new book objects
let testBook1 = new Book('The Hobbit', 'J.R.R. Tolkien', 324, 'not read');
let testBook2 = new Book('The Name of the Wind', 'Patrick Rothfuss', 451, 'read');
let testBook3 = new Book('The Wise Man\'s Fear', 'Patrick Rothfuss', 275, 'not read');



// TABLE JAVASCRIPT //
const tableholder = document.querySelector('table');

const perRow = 4;
const table = document.querySelector('tbody');
const row = table.insertRow()
const tableReference = ['title', 'author', 'isRead']

// Create delete button


// Clear library data
function clearLibrary() {
    const rows = document.querySelectorAll('tbody tr'); // Not specifying tr child of tbody was working but causing an uncaught DOMException error after functoin ran
    rows.forEach(row => {
        table.deleteRow(row);
    })
}

// Generate table of library entries
function displayLibrary() {
    clearLibrary();
    for (i = 0; i < myLibrary.length; i++) { // Create row for number of objects in lib
        const tr = table.insertRow();
        for (j = 0; j < 4; j++) { // Create column for each object detail to display
            const td = tr.insertCell();
            // Set CSS style for status and delete columns
            if (j > 1) {
                td.style.textAlign = 'center';
            }
            let cellContent = myLibrary[i][tableReference[j]];
            if (j === 2) {
                const readBtn = document.createElement('button');
                readBtn.type = 'button';
                readBtn.class = 'read-btn';
                readBtn.id = i;
                readBtn.textContent = cellContent;
                td.appendChild(readBtn);
            } else if (j === 3) {
                const deleteBtn = document.createElement('button')
                deleteBtn.type = 'button';
                deleteBtn.className = 'delete-btn';
                deleteBtn.id = i; // Will be used to identify row to delete
                deleteBtn.textContent = 'X';
                td.appendChild(deleteBtn); // Same button gets reappended each call
            } else {
                td.textContent = cellContent;
            }
        }
    }
    tableholder.appendChild(table);
}

// Add test books to library
// Add book objects to library array
addBookToLibrary(testBook1);
addBookToLibrary(testBook2);
addBookToLibrary(testBook3);

displayLibrary();

Book.prototype.changeReadStatus = function () {
    if (this.isRead === "read") {
        console.log('Book is now unread');
        this.isRead = 'not read';
    } else {
        this.isRead = 'read'
    }
    displayLibrary();
}

// PPOP-UP JAVASCRIPT //
function openForm() {
    document.querySelector('#add-popup').style.display = "block";
}
function closeForm() {
    document.querySelector('#add-popup').style.display = "none";
}
const openBtn = document.querySelector('#add-book');
openBtn.addEventListener('click', () => {
    openForm();
})

// Clicking outside of pop-up will close pop-up

// Change read status by pressing book status

// Library entry delete button
const deleteBtns = document.querySelectorAll('.delete-btn');
deleteBtns.forEach(button => {
    button.addEventListener('click', () => {
        myLibrary.splice(button.id, 1);
        displayLibrary();
        deleteBtns = document.querySelectorAll('.delete-btn');
    })
})

// FORM JAVASCRIPT //
const form = document.querySelector('#add-book');

form.addEventListener('submit', (event) => {
    console.log("Form submitted");
    event.preventDefault();

    const formData = new FormData(this);

    for (const formElement of formData) {
        console.log(formElement);
    }
})