const content = document.querySelector(".content")
const addBtn = document.querySelector("#add")
const form = document.querySelector(".form")
const submitBtn = document.querySelector("#submitBtn")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const isRead = document.querySelector("#isRead")

let showForm = false
let myLibrary = []
let id = 0

// book object
function Book(author, title, pages, isRead) {
    this.author = author
    this.title = title
    this.pages = pages
    this.isRead = isRead
}

// confirm add book into library
submitBtn.addEventListener('click', () => {
    let bookTitle = title.value
    let bookAuthor = author.value
    let bookPages = pages.value
    let bookRead = isRead.checked
    if (!!bookTitle === false) {
        title.style.borderColor = '#f32424'
    } else if (!!bookAuthor === false) {
        author.style.borderColor = '#f32424'
    } else if (!!bookPages === false) {
        pages.style.borderColor = '#f32424'
    } else {
        const book = new Book(bookAuthor, bookTitle, bookPages, bookRead)
        book.bookId = id
        myLibrary.push(book)
        form.setAttribute('style', 'visibility: hidden')
        addBtn.src = './png/icons8-add-96.png'
        showForm = false
        title.value = ""
        author.value = ""
        pages.value = ""
        title.style.borderColor = '#000000'
        author.style.borderColor = '#000000'
        pages.style.borderColor = '#000000'
        displayBook(myLibrary, id)
        id++
        console.log(myLibrary)
    }
})

// display the form ask user to add book info
addBtn.addEventListener('click', () => {
    if (showForm === false) {
        form.setAttribute('style', 'visibility: visible')
        addBtn.src = './png/icons8-cancel-96.png'
        showForm = true
        title.style.borderColor = '#000000'
        author.style.borderColor = '#000000'
        pages.style.borderColor = '#000000'
    } else {
        form.setAttribute('style', 'visibility: hidden')
        addBtn.src = './png/icons8-add-96.png'
        showForm = false
        title.style.borderColor = '#000000'
        author.style.borderColor = '#000000'
        pages.style.borderColor = '#000000'
    }
})

// displayed added book on html
const displayBook = (library, index) => {
    const bookCard = document.createElement("div")
    bookCard.setAttribute('class', 'card')
    bookCard.setAttribute('id', `card${id}`)
    const author = document.createElement("p")
    const title = document.createElement("p")
    const pages = document.createElement("p")
    const read = document.createElement("button")
    read.setAttribute('class', 'read')
    read.setAttribute('id', `read${id}`)
    const removed = document.createElement("button")
    removed.setAttribute('class', 'removed')
    removed.setAttribute('id', `removed${id}`)
    content.append(bookCard)
    bookCard.appendChild(author)
    bookCard.appendChild(title)
    bookCard.appendChild(pages)
    bookCard.appendChild(read)
    bookCard.appendChild(removed)
    title.textContent = library[index].title
    author.textContent = library[index].author
    pages.textContent = library[index].pages
    read.textContent = (library[index].isRead === true) ? 'Read' : 'Unread'
    removed.textContent = 'Removed'
    changeRead(id)
    removeBook(id)
}

// change book read status
const changeRead = (index) => {
    const readBtn = document.querySelector(`#read${index}`)
    // console.log(readBtn)
    readBtn.addEventListener('click', () => {
        console.log(myLibrary)
        myLibrary[index].isRead = (myLibrary[index].isRead !== true)
        readBtn.textContent = (myLibrary[index].isRead === true) ? 'Read' : 'Unread'
    })
}

// remove book from html,not library
const removeBook = (index) => {
    const removeBtn = document.querySelector(`#removed${index}`)
    // const readBtn = document.querySelector(`#read${index}`)
    const card = document.querySelector(`#card${index}`)
    // console.log(card)
    removeBtn.addEventListener('click', () => {
        content.removeChild(card)
    })
}
