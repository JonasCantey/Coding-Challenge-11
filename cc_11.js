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