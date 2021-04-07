const addBookBtn = document.getElementById("addBook");

let bookTitle = document.getElementById("titleInput");
let authorName = document.getElementById("authorInput");
let pages = document.getElementById("pagesInput");
let haveYouReadIt = document.getElementById("haveReadBox");
    // haveYouReadIt.checked must be passed externally in order to properly populate true or false

const browsingTable = document.getElementsByClassName("appendedBookInfo");




let myLibrary = [];
// objects will be pushed into this.

function book(bookTitle, authorName, pages, haveYouReadIt) {
    //constructor
    this.title = bookTitle.value,
    this.author = authorName.value,
    this.pages = pages.value,
    this.haveRead = haveYouReadIt.checked
}

function addBookToLibrary() {
    // do stuff here like appending a new div in order to display the object created in the newbook function
    resetInputs();
}


function addRow() {
    let row = browsingTable.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "new cell 1";
    cell2.innerHTML = "new cell 2";

}

function removeBook() {
    // recommended to give them a data-attribute that corresponds to the index of the library array
}

function changeReadStatus() {
    // button that toggles whether a book has been read or not on the book prototype instance
}

function resetInputs() {
    bookTitle.value = "What is the title of the book?";
    authorName.value = "Who is the author of the book?";
    pages.value = "How many pages are in the book?";
    haveYouReadIt.checked = false;

}

//addBookBtn.addEventListener('click', addBookToLibrary);
