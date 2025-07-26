import { useState } from 'react';

const Bookshelf = () => {
    const [books, setbooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        { title: 'Automate the Boring Stuff With Python', author: 'Al Sweigart' },
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });


    // function handleInputChange
    // Using (event) because every time the user will type in the form, this will be registered as an event for my function.
    const handleInputChange = (event) => {
        const name = event.target.name; //name in the form input box (e.g. the 'title' or 'author' part) -- The event is accessing the name of the input field.
        console.log("Checking const name is working:", name);
        const value = event.target.value; //what the user typed in - This is accessing the value the user has typed.
        console.log("Checking value is working:", value);

        console.log("newBook BEFORE change:", newBook);

        // const updatedBook = {
        //     title: newBook.title,
        //     author: newBook.author,
        // };

        //changing updatedBook code above to using spread operator as per the lesson.
        const updatedBook = {
            ...newBook, //creating a new object updatedBook with spread operator
            [name]: value //updating one field at a time - “Look at what’s inside the variable called name, and use that as the field (key) name. Then store value as the value for that field.”
        };

        console.log("updatedBook AFTER spread + update:", updatedBook);

        // ! I think this below line 30 is doing the same thing as name & value above? Not sure if I need this too.
        updatedBook[name] = value; //this updates the one field the user typed in
        console.log("updatedBook to see if it's the same as updatedBook AFTER", updatedBook);

        setNewBook(updatedBook); //new state - this setter is saving newBook to a new state as an updatedBook.
        console.log("Checking new state to see if working:", updatedBook);
    };

    // A More Advanced Version of handleInputChange below:
    //Looked up a more advanced way to do it & found the following. Don't understand all of this yet. But note to self to research and understand further:
    // const handleInputChange = (event) => {
    //     const {name, value} = event.target;
    //     setNewBook({ ...newBook, [name]:value});
    // };


    // function handleSubmit
    // const handleSubmit = (event) => {

    // }


    return <div className="bookshelfDiv">

        <div className="formDiv">
            <h3>Add a Book</h3>
            {/* FORM CREATION */}
            {/* Form will go here */}
        </div>

        <div className="bookCardsDiv">{/* Book cards will display here */}</div>

        {/* Test Button to see if my handleInputChange function is working before i create controlled forms. */}
        <button onClick={() => handleInputChange({ target: { name: "title", value: "value" } })}>
            Test handleInputChange</button>

    </div>
};

export default Bookshelf;