import { useState } from 'react';

const Bookshelf = () => {
    const [books, setbooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        { title: 'Automate the Boring Stuff With Python', author: 'Al Sweigart'},
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: ''});

    // function handleInputChange
    const handleInputChange = (input) => {

    }

    // function handleSubmit
    const handleSubmit = (input) => {

    }


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