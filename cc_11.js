//Task 1 - Creating a book class
console.log("Task 1 - Creating a book class")

class book {                                //Declared a new class "Book"
    constructor(title, author, isbn, copies) { //initialized the class properties
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.copies = copies;
    }

    getDetails() {              //Just a function that console.logs all the properties of a class object
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, copies: ${this.copies}`;
    }

    updateCopies(quantity){        //Created a function that updates the amount of copies on hand when returned or borrowed.
        this.copies += quantity;
        if (this.copies < 0) {
            this.copies = 0; // Ensure copies don't go negative
    }
}
};

const book1 = new book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);   //test case 1, adding a book
console.log(book1.getDetails());


book1.updateCopies(-1);     //test case 2, saying that someone borrowed a book
console.log(book1.getDetails());

//Task 2 - Creating a Borrower Class
console.log("Task 2 - Creating a Borrower Class")

class borrower {        //declare new class borrower
    constructor(name, borrowerId) { //using the properties name and borrowerId
        this.name = name;           //initializing properties
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(bookTitle) { //basically a function that pushes a new borrowed book to the array
        this.borrowedBooks.push(bookTitle);
    }

    returnBook(bookTitle) { //method that looks for a book in the borrowed book array, if its found then
        const index = this.borrowedBooks.indexOf(bookTitle);    //it will remove it from the array
        if (index !== -1) {     //if not found it will log book not found
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`Book "${bookTitle}" not found in borrowed books.`);
        }
    }
}

const borrower1 = new borrower("Alice Johnson", 201);   //test case 1 borrowing book
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

borrower1.returnBook("The Great Gatsby");   //test case 2 returning book
console.log(borrower1.borrowedBooks);

//Task 3: Creating a Library Class
console.log("Task 3: Creating a Library Class")

class Library {
    constructor() {
        this.books = []; //made array to store books
        this.borrowers = []; //made array to store borrowers
    }

    addBook(book) {
        this.books.push(book);  //method to add book to book array
    }

    listBooks() {
        this.books.forEach((book) => {  //method that getDetails on each book
            console.log(book.getDetails());
        });
    }

    lendBook(borrowerId, isbn) {
        const book = this.books.find((b) => b.isbn === isbn);   //finds the book using ISBN
        if (!book) {
            console.log(`Book with ISBN ${isbn} not found.`);
            return;
        }

        // Check if the book has available copies
        if (book.copies < 1) {
            console.log(`No copies available for book "${book.title}".`);
            return;
        }

        // Find the borrower by borrowerId
        const borrower = this.borrowers.find((b) => b.borrowerId === borrowerId);
        if (!borrower) {
            console.log(`Borrower with ID ${borrowerId} not found.`);
            return;
        }

        // Reduce the book's copies by 1
        book.updateCopies(-1);

        // Add the book title to the borrower's borrowedBooks list
        borrower.borrowBook(book.title);

        console.log(`Book "${book.title}" successfully lent to ${borrower.name}.`);
    }
}
const myLibrary = new Library();    //creates instance of Library class
myLibrary.addBook(book1);   //added book to array
myLibrary.listBooks();  //lists books in array

//Task 4: Implementing Book Borrowing
console.log("Task 4: Implementing Book Borrowing")
myLibrary.borrowers.push(borrower1);
myLibrary.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]