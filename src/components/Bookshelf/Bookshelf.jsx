import { useState } from 'react';

const Bookshelf = () => {
    const [books, setbooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        { title: 'Automate the Boring Stuff With Python', author: 'Al Sweigart'},
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: ''});


    // function handleInputChange
    // Using (event) because every time the user will type in the form, this will be registered as an event for my function.
    const handleInputChange = (event) => {
        const name = event.target.name; //name in the form input box (e.g. the 'title' or 'author' part)
        const value = event.target.value; //what the user typed in

        const updatedBook = {
            title: newBook.title,
            author: newBook.author,
        };

        updatedBook[name] = value; //this updates the one field the user typed in

        setNewBook(updatedBook); //new state - this setter is saving newBook to a new state as an updatedBook.
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

    </div>
};

export default Bookshelf;