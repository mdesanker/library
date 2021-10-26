Library catalog.

Created using HTML, CSS, and JavaScript.

Simple library app that allows users to add books by inputing book title, author and read status into a form. Submitting information in form adds book to library stored in an array and updates a table displaying books in library.

User can change read status by clicking on status button in each row. User can remove books from library by clicking delete button.

Library data is stored and retrieved from localStorage. If no library exists in localStorage, a default starter library is used.

At the moment I am using innerHTML = '' to clear the table each time an update is made, which is not the most secure method. Tried removeChild and deleteRow in loops that cycle through all tr in tbody, but none of these methods worked reliably and I was not able to figure out why.

Learned:

- Using forms and inputs
- Object constructors
- localStorage (including converting array to string for storage and reversal on retrieval)
- Using JavaScript to generate a table
- Inserting buttons into tables and ensuring each button has an eventListener
- Added some simple HTML and JavaScript input validation
