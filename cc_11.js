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