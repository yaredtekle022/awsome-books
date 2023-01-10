let libraryList = [];
const submit = document.querySelector('#submit');
const list = document.querySelector('#bookList');
const bookTitle = document.querySelector('#inputTitle');
const bookAuthor = document.querySelector('#inputAuthor');

function Book(title, author) {
  this.title = title;
  this.author = author;
}
// adds book to library
function addBookToLibrary() {
  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    libraryList.push(new Book(bookTitle.value, bookAuthor.value));
  } else {
    list.appendChild();
  }
}
// add display function to display books
function displayBooks(book) {
  const row = document.createElement('tr');
  const createTitle = document.createElement('th');
  const createAuthor = document.createElement('th');
  createTitle.innerHTML = book.title;
  createAuthor.innerHTML = book.author;
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.type = 'submit';
  removeBtn.innerText = 'Remove';
  row.appendChild(createTitle);
  row.appendChild(createAuthor);
  row.appendChild(removeBtn);
  list.appendChild(row);
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayBooks(libraryList[libraryList.length - 1]);
  localStorage.setItem('libraryLists', JSON.stringify(libraryList));
  bookTitle.value = '';
  bookAuthor.value = '';
});

// add the remove method
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    e.target.parentElement.remove();
    libraryList = libraryList.filter(({ title }) => e.target.parentElement.firstChild.innerText
    !== title);
    localStorage.setItem('libraryLists', JSON.stringify(libraryList));
  }
});

// store data in the local storage

if (localStorage.getItem('libraryLists')) {
  JSON.parse(localStorage.getItem('libraryLists')).forEach((book) => {
    displayBooks(book);
    libraryList.push(book);
  });
}