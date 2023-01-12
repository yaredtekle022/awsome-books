// Book Class:
import Book from './book.js';
// store classes: handles Storage
import Store from './store.js';
// UI class: Handles UI Tasks
import UI from './UI.js';

// event: display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// event: add books
document.querySelector('#enter').addEventListener('submit', (e) => {
// prevent defualt
  e.preventDefault();

  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  // validation
  if (!(title === '') || !(author === '')) {
    // instatiate book
    const book = new Book(title, author);
    // Add book to UI
    UI.addBookToList(book);

    // add book to store
    Store.addBook(book);

    // clear field
    UI.clearfields();
  }
});

// event: remove a books
document.querySelector('#bookList').addEventListener('click', (e) => {
  // remove book from UI
  UI.deleteBook(e.target);

  // remove books form store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});