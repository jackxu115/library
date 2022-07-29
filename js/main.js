const container = document.querySelector(".container")
let myLibrary = []




function Book(author, title, pages, isRead ) {
    this.author = author
    this.title = title
    this.pages = pages
    this.isRead = isRead
}

const book1 = new Book('Jk', 'Porter',456, true)

const book2 = new Book("Lorem ipsum dolor sit", "Lorem ipsum dolor",1093, false)


const addBookToLibrary = book => {
    myLibrary.push(book)
}

addBookToLibrary(book1)
addBookToLibrary(book2)

console.log(myLibrary)

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
            container.append(bookCard)
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

displayBook(myLibrary)