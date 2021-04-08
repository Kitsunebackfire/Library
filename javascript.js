const addBookBtn = document.getElementById("addBook");

let bookTitle = document.getElementById("titleInput");
let authorName = document.getElementById("authorInput");
let pages = document.getElementById("pagesInput");
let haveYouReadIt = document.getElementById("haveReadBox");
    // haveYouReadIt.checked must be passed externally in order to properly populate true or false

const browsingTable = document.querySelector('table');




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
    browsingTable.innerHTML = "";
    
    myLibrary.push(new book(bookTitle, authorName, pages, haveYouReadIt));
    for(let i=0; i < myLibrary.length;i++) {
        let template = `
                    <tr class="appendedBooks">
                        <td>${myLibrary[i].title}</td>
                        <td>${myLibrary[i].author}</td>
                        <td>${myLibrary[i].pages}</td>
                        <td>${myLibrary[i].haveRead}</td>
                        <td><button>press me</button></td>
                    </tr>`
        browsingTable.innerHTML += template;
    }
    
    

    //addRow();
    resetInputs();
}


function addRow() {
    
    let template = `
                    <tr class="appendedBooks">
                        <td>${bookTitle.value}</td>
                        <td>${authorName.value}</td>
                        <td>${pages.value}</td>
                        <td>${haveYouReadIt.checked}</td>
                        <td><button>press me</button></td>
                    </tr>`
    browsingTable.innerHTML += template;

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

addBookBtn.addEventListener('click', addBookToLibrary);
