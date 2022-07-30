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

function Book(author, title, pages, isRead ) {
    this.author = author
    this.title = title
    this.pages = pages
    this.isRead = isRead
}

submitBtn.addEventListener('click', () => {
    console.log('add')
    let bookTitle = title.value
    let bookAuthor = author.value
    let bookPages = pages.value
    let bookRead = (isRead.value === 'on') ? true : false
    if (!!bookTitle === false) {
        title.style.borderColor = '#f32424'
    } else if (!!bookAuthor === false) {
        author.style.borderColor = '#f32424'
    } else if (!!bookPages === false) {
        pages.style.borderColor = '#f32424'
    } else {
        const book = new Book(bookAuthor, bookTitle, bookPages, bookRead)
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
        book.bookId = id
        id++
    }
})

addBtn.addEventListener('click', () => {
    console.log(myLibrary)
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

const displayBook = library => {

    if (myLibrary.length !== 0 ) {
        for (let book in myLibrary) {
            console.log('clicked')
            const bookCard = document.createElement("div")
            bookCard.setAttribute('class','card')
            const author = document.createElement("p")
            const title = document.createElement("p")
            const pages = document.createElement("p")
            const read = document.createElement("button")
            read.setAttribute('class','read')
            const removed = document.createElement("button")
            removed.setAttribute('class','removed')
            content.append(bookCard)
            bookCard.appendChild(author)
            bookCard.appendChild(title)
            bookCard.appendChild(pages)
            bookCard.appendChild(read)
            bookCard.appendChild(removed)
            title.textContent = myLibrary[book].title
            author.textContent = myLibrary[book].author
            pages.textContent = myLibrary[book].pages
            read.textContent = (myLibrary[book].isRead === true) ? 'Read' : 'Unread'
            removed.textContent = 'Removed'
        }
    }
}

// displayBook(myLibrary)