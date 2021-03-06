// script.js //
// let myLibrary = []

let defaultLibrary = [
  // Program uses this default library if !localStorage
  { title: "The Name of the Wind", author: "Rothfuss", status: "read" },
  { title: "The Kite Runner", author: "Hosseini", status: "read" },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "Rowling",
    status: "read",
  },
];

// // Book constructor function
// function Book(title, author, status) {
//   this.title = title;
//   this.author = author;
//   this.status = status;
// }

// Book class declaration
class Book {
  constructor(title, author, status) {
    // New book constructor
    this.title = title;
    this.author = author;
    this.status = status;
  }
}

// Book.prototype.displayInfo = function () {  // This function was used in testing
//     console.log(`${this.title} by ${this.author}, and is ${this.status}.`);
// }

const bookTitle = document.querySelector("#title-input");
const titleError = document.querySelector("#title-error");
const bookAuthor = document.querySelector("#author-input");
const authorError = document.querySelector("#author-error");
const bookStatus = document.querySelector("#status-select");
const libraryTable = document.querySelector("tbody");
const form = document.querySelector("form");

bookTitle.addEventListener("input", function () {
  if (bookTitle.validity.tooShort) {
    titleError.className = "error";
    titleError.textContent = "Please enter a valid title";
  } else {
    titleError.textContent = "";
    titleError.className = "";
  }
});

bookAuthor.addEventListener("input", function () {
  if (bookAuthor.validity.tooShort) {
    authorError.className = "error";
    authorError.textContent = "Please enter a valid author";
  } else {
    authorError.textContent = "";
    authorError.className = "";
  }
});

form.addEventListener("submit", (e) => {
  // Update library table on new entry submission
  e.preventDefault();
  addBookToLibrary();
  clearForm();
  display();
});

function clearForm() {
  // Set input fields to empty string
  bookTitle.value = "";
  bookAuthor.value = "";
}

function addBookToLibrary() {
  // Construct new book with input field values
  const newBook = new Book(bookTitle.value, bookAuthor.value, bookStatus.value);
  myLibrary.push(newBook);
}

function changeStatus(index) {
  // Change read status
  if (myLibrary[index].status === "read") {
    myLibrary[index].status = "not read";
  } else myLibrary[index].status = "read";
  display();
}

function deleteBook(index) {
  // Remove book from library array
  myLibrary.splice(index, 1);
  display();
}

function storeLocal(array) {
  // Save current library to local storage
  localStorage.setItem("storedLibrary", JSON.stringify(array));
}

function retrieveLocal() {
  // Retrieve library from local storage
  const storedLibrary = JSON.parse(localStorage.getItem("storedLibrary"));
  if (storedLibrary) {
    myLibrary = storedLibrary;
  } else myLibrary = defaultLibrary; // If !storedLibrary, use default
}

// function clearTable() {
//   const allRows = document.querySelectorAll(".content-row");
//   if (!allRows) return;
//   const numRows = allRows.length;
//   console.log(allRows);
//   for (i = 0; i <= numRows; i++) {
//     const libRow = document.querySelector(".content-row");
//     console.log(i);
//     libraryTable.removeChild(libRow);
//   }
// }

function display() {
  //   clearTable();
  libraryTable.innerHTML = ""; // Not a secure solution, but other options haven't worked yet
  for (j = 0; j < myLibrary.length; j++) {
    // Iterate through each item in library array
    let newRow = libraryTable.insertRow();
    newRow.classList.add("content-row");
    for (i = 0; i < 4; i++) {
      // Create 4 cells per row
      let newCell = newRow.insertCell();
      switch (i) {
        case 0:
          newCell.textContent = myLibrary[j].title;
          break;
        case 1:
          newCell.textContent = myLibrary[j].author;
          break;
        case 2:
          const statusBtn = document.createElement("button");
          statusBtn.classList.add("status-btn");
          statusBtn.id = j; // Correlate id to library index
          statusBtn.textContent = myLibrary[j].status;
          newCell.append(statusBtn);
          statusBtn.addEventListener("click", () => changeStatus(statusBtn.id)); // Apply eventListener to each button as created
          break;
        case 3:
          const deleteBtn = document.createElement("button");
          deleteBtn.classList.add("delete-btn");
          deleteBtn.id = j; // Correlate id to library index
          deleteBtn.textContent = "Delete";
          newCell.append(deleteBtn);
          deleteBtn.addEventListener("click", () => deleteBook(deleteBtn.id));
      }
    }
  }
  storeLocal(myLibrary); // Every time display updates, update local storage
}

retrieveLocal(); // Only retrieve data from local on program open
display();
