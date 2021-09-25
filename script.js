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

// TABLE JAVASCRIPT //
const tableholder = document.querySelector('table');

const perRow = 4;
const table = document.querySelector('tbody');
const row = table.insertRow()
const tableReference = ['title', 'author', 'isRead']

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
        for (j = 0; j < 3; j++) { // Create column for each object detail to display
            const td = tr.insertCell();
            // Set CSS style for status and delete columns
            if (j > 1) {
                td.style.textAlign = 'center';
            }
            let cellContent = myLibrary[i][tableReference[j]];
            td.textContent = cellContent;
        }

    }
    tableholder.appendChild(table);
}

// PPOP-UP JAVASCRIPT //
function openForm() {
    document.querySelector('.add-popup').style.display = "block";
}
function closeForm() {
    document.querySelector('.add-popup').style.display = "none";
}


// Test books for development
let testBook1 = new Book('The Hobbit', 'J.R.R. Tolkien', 324, 'not read');
let testBook2 = new Book('The Name of the Wind', 'Patrick Rothfuss', 451, 'read');
let testBook3 = new Book('The Wise Man\'s Fear', 'Patrick Rothfuss', 275, 'not read');

// Add test books to library
addBookToLibrary(testBook1);
addBookToLibrary(testBook2);
addBookToLibrary(testBook3);

displayLibrary();