// The majority of this lesson on 'Controlled Forms' is done in this component Bookshelf.
// Changed a little bit of code in App.jsx for css styling purposes so better alignment and continuity on webpage.

import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        { title: 'Automate the Boring Stuff With Python', author: 'Al Sweigart' },
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    // ----------------------------------------------------------------------------------
    // function handleInputChange
    // Using (event) because every time the user will type in the form, this will be registered as an event for my function.
    const handleInputChange = (event) => {
        const name = event.target.name; //name in the form input box (e.g. the 'title' or 'author' part) -- The event is accessing the name of the input field.
        console.log("Checking const name is working:", name);
        const value = event.target.value; //what the user typed in - This is accessing the value the user has typed.
        console.log("Checking value is working:", value);

        console.log("newBook BEFORE change:", newBook);

        //changing updatedBook code above to using spread operator as per the lesson.
        const updatedBook = {
            ...newBook, //creating a new object updatedBook with spread operator
            [name]: value //updating one field at a time - e.g. looking at what’s inside the variable called name, and use that as the field/key name; and then storing the value as the value for that field.
        };

        console.log("updatedBook AFTER spread + update:", updatedBook);

        // I think this below line 34 is doing the same thing as name & value above. Not sure if I need this too. I'm thinking probably not since dev tools working. Pretty sure the code I have below is just repeating what I just did above.
        // updatedBook[name] = value; //this updates the one field the user typed in
        // console.log("updatedBook to see if it's the same as updatedBook AFTER", updatedBook);

        setNewBook(updatedBook); //new state - this setter is saving newBook to a new state as an updatedBook.
        console.log("Checking new state to see if working:", updatedBook);
    };

    // ----------------------------------------------------------------------------------

    // function handleSubmit - Creating a function that will execute when the form is submitted.
    const handleSubmit = (event) => {
        event.preventDefault(); // Preventing the default form submission actions - which prevents the page from reloading.

        // Adding newBook to the books array - updating the books array state with a new list to include the newBook
        setBooks([...books, newBook]);

        // Clearing the input fields - resetting the newBook state to its initial empty values to clear the form fields so that user can add addtl.
        setNewBook({ title: '', author: '' });

        // Testing to make sure working.
        console.log("Book added:", newBook);
        console.log("Updated books list:", [...books, newBook]);
    };

    // ----------------------------------------------------------------------------------


    return (
        <>
            <div className="bookshelfDiv">

                <div className="formDiv">
                    <h3>Add a Book</h3>

                    {/* FORM CREATION */}
                    <form onSubmit={handleSubmit}>
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={newBook.title}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Author:
                            <input
                                type="text"
                                name="author"
                                value={newBook.author}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Add Book</button>
                    </form>
                </div>

                <div className="bookCardsDiv">
                    {/* Book cards will display here */}
                    {books.map((book, index) => (
                        <div key={index} className="bookCard">
                            <p>Title: {book.title}</p>
                            <p>Author: {book.author}</p>
                        </div>
                    ))}
                </div>

                {/* Test Button to see if my handleInputChange function is working before i create controlled forms. */}
                {/* <button onClick={() => handleInputChange({ target: { name: "title", value: "value" } })}>
                    Test handleInputChange</button> */}

            </div>
        </>
    )
};

export default Bookshelf;



