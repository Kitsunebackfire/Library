const addBookBtn = document.getElementById("addBook");

let bookTitle = document.getElementById("titleInput");
let authorName = document.getElementById("authorInput");
let pages = document.getElementById("pagesInput");
let haveYouReadIt = document.getElementById("haveReadBox");
// haveYouReadIt.checked must be passed externally in order to properly populate true or false
const bookForm = document.querySelector('.bookForm');

const browsingTable = document.querySelector(".appendedBookInfo");

let myLibrary = [];
// objects will be pushed into this.

class book {
  constructor(bookTitle, authorName, pages, haveYouReadIt) {
    this.createBookRow(bookTitle, authorName, pages, haveYouReadIt);
  }
  //createBookRow(bookTitle, authorName, pages, haveYouReadIt)
  // constructor function to create row via dom manipulation
  createBookRow(bookTitle, authorName, pages, haveYouReadIt) {
    let bookRowDiv = document.createElement("div");
    bookRowDiv.classList.add("appendedBooks");

    let bookRowDivTitle = document.createElement("div");
    bookRowDivTitle.innerText = bookTitle;
    bookRowDiv.appendChild(bookRowDivTitle);

    let bookRowDivAuthor = document.createElement("div");
    bookRowDivAuthor.innerText = authorName;
    bookRowDiv.append(bookRowDivAuthor);

    let bookRowDivPages = document.createElement("div");
    bookRowDivPages.innerText = pages;
    bookRowDiv.appendChild(bookRowDivPages);

    console.log(haveYouReadIt);
    let bookRowDivHaveYouReadIt = document.createElement("div");
    bookRowDivHaveYouReadIt.innerText = haveYouReadIt;
    bookRowDiv.appendChild(bookRowDivHaveYouReadIt);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    deleteButton.innerText = "x";
    bookRowDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      deleteButton.parentElement.remove();
    });

    browsingTable.appendChild(bookRowDiv);
  }
  removeBook() {}
  changeReadStatus() {}
}

function removeBook() {
  // recommended to give them a data-attribute that corresponds to the index of the library array
}

function changeReadStatus() {
  // button that toggles whether a book has been read or not on the book prototype instance
}

function resetInputs() {
  bookTitle.value = "";
  authorName.value = "";
  pages.value = "";
  haveYouReadIt.checked = false;
}

function check() {
  event.preventDefault();
  console.log("poop");
  if (bookTitle.value !== "" && authorName.value !== "" && pages.value !== "") {
    new book(
      bookTitle.value,
      authorName.value,
      pages.value,
      haveYouReadIt.checked
    );
    //new book(bookTitle.value, authorName.value, pages.value, haveYouReadIt.checked);
    resetInputs();
  } else {
    alert("please ensure all fields are filled");
  }
}

/// submit is the required event to enable built in form verification
bookForm.addEventListener('submit', () => {
    event.preventDefault();
    check();
});
//addBookBtn.addEventListener("click", check);


