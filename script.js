// script.js //
// let myLibrary = []

let myLibrary = [
    { title: 'The Name of the Wind', author: 'Rothfuss', status: 'read' },
    { title: 'The Kite Runner', author: 'Hosseini', status: 'read' },
    { title: 'Harry Potter and the Chamber of Secrets', author: "Rowling", status: 'read' },
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

// Test book
const book1 = new Book("The Lion, the Witch, and the Wardrobe", "Lewis", "read");

const bookTitle = document.querySelector('#title-input');
const bookAuthor = document.querySelector('#author-input');
const bookStatus = document.querySelector('#status-select');
const libraryTable = document.querySelector('tbody');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    clearForm();
    display();
})

function clearForm() {
    bookTitle.value = '';
    bookAuthor.value = '';
}

function addBookToLibrary() {
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookStatus.value);
    myLibrary.push(newBook);
}

function changeStatus(index) {
    if (myLibrary[index].status === 'read') {
        myLibrary[index].status = 'not read';
    } else myLibrary[index].status = 'read';
    display();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    display();
}

// function clearTable() {
//     for (i = 0; i <= libraryTable.rows.length; i++) {
//         console.log(i);
//         libraryTable.removeChild(libraryTable.firstChild);
//     }
// }

function display() {
    libraryTable.innerHTML = ''; // Not a secure solution, but other options haven't worked yet
    for (j = 0; j < myLibrary.length; j++) {
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
                    statusBtn.id = j;
                    statusBtn.textContent = myLibrary[j].status;
                    newCell.append(statusBtn);
                    statusBtn.addEventListener('click', () => changeStatus(statusBtn.id));
                    break;
                case 3:
                    const deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('delete-btn');
                    deleteBtn.id = j;
                    deleteBtn.textContent = 'Delete';
                    newCell.append(deleteBtn);
                    deleteBtn.addEventListener('click', () => deleteBook(deleteBtn.id));
            }
        }
    }
}

display();