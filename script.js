const myLibrary = []
const addButton = document.querySelector(".add")
const submit = document.querySelector(".submit")
const cancel = document.querySelector(".cancel")
const dialog = document.querySelector("#addBookDialog")
const inputTitle =  document.querySelector("#title")
const inputAuthor =  document.querySelector("#author")
const inputPages =  document.querySelector("#pages")
const inputReaded =  document.querySelector("#readed")
const bookContainer = document.querySelector("#bookContainer")
const bookForm = document.querySelector("#bookForm")


let titleValue = ""
let authorValue = ""
let pagesValue = ""
let readedValue = ""
let bookobj = {}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read
        this.info = function() {
            console.log(`${title} by ${author}, ${pages}, ${read}`);
        }  
    }
    
}

/* input checked*/ 
submit.addEventListener("click", () => {
    
    titleValue = inputTitle.value
    authorValue = inputAuthor.value
    pagesValue = inputPages.value
    if (inputReaded.checked  === true) {
        readedValue  = "Readed"
    } else {
        readedValue  = "Not read yet"
    }
    bookobj = {
        title: titleValue,
        author: authorValue,
        pages: pagesValue,
        readed: readedValue
    }
    
bookForm.onsubmit = addBookToLibrary
})


function addBookToLibrary(e) {
    e.preventDefault()
    myLibrary.push(bookobj);
    let newDiv = document.createElement("div")
    let bookTitle = document.createElement("p")
    let bookAuthor = document.createElement("p")
    let bookPages = document.createElement("p")
    let bookReaded = document.createElement("p")
    let buttonRead = document.createElement("button")
    let buttonRemove = document.createElement("button")
    let buttonsContainer = document.createElement("div")

    bookContainer.appendChild(newDiv)
    newDiv.classList.add("new-book")

    newDiv.appendChild(bookTitle)
    newDiv.appendChild(bookAuthor)
    newDiv.appendChild(bookPages)
    newDiv.appendChild(bookReaded)
    
    bookTitle.textContent = `Title: ${titleValue}`
    bookAuthor.textContent = `Author: ${authorValue}`
    bookPages.textContent = `Pages: ${pagesValue}`
    
    buttonRead.textContent = readedValue

    newDiv.appendChild(buttonsContainer)
    buttonsContainer.appendChild(buttonRead)
    buttonsContainer.appendChild(buttonRemove)

    buttonsContainer.classList.add("buttons-container")
    buttonRemove.classList.add("cancel")
    buttonRemove.classList.add("book-buttons")
    buttonRead.classList.add("change-read")
    buttonRead.classList.add("book-buttons")
    buttonRead.setAttribute("type", "button");
    buttonRemove.setAttribute("type", "button");
    buttonRemove.textContent = "Remove"

    /*revise (e)*/ 
    buttonRead.addEventListener("click", e => {
        if (buttonRead.textContent === "Readed") {
            buttonRead.textContent = "Not read yet"
            
        } else if (buttonRead.textContent === "Not read yet") {
            buttonRead.textContent = "Readed"
        } 
    })

    buttonRemove.addEventListener("click", () => {
        bookContainer.removeChild(newDiv)
    })
    dialog.close()
}

function openCheck(dialog) {
    if (dialog.open) {
      console.log("Dialog open");
      inputTitle.value = ""
      inputAuthor.value = "" 
      inputPages.value = ""
      inputReaded.value = ""
      inputReaded.checked  = false
    } else {
      console.log("Dialog closed");
    }
  }

addButton.addEventListener("click", () => {
    dialog.showModal();
    openCheck(dialog);
})

cancel.addEventListener("click", () => {
    dialog.close("inputUndefined")
    openCheck(dialog);
})


const book1 = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
book1.info();

