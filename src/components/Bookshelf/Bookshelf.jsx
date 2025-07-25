import { useState } from 'react';

const Bookshelf = () => {

    const [books, setbooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        { title: 'Automate the Boring Stuff With Python', author: 'Al Sweigart'},
    ]);

    const [newBook, setNewBook] = useState({ title: '', author: ''});



    return <div className="bookshelfDiv">

        <div className="formDiv">
            <h3>Add a Book</h3>
            {/* Form will go here */}
        </div>

        <div className="bookCardsDiv">{/* Book cards will display here */}</div>

    </div>
};

export default Bookshelf;