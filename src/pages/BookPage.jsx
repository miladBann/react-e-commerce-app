import Book from "../components/Book.jsx";
import React, {useState} from "react";

function BookPage({books: initialBooks})
{
    const [books, setbooks] = useState(initialBooks);

    function filterBooks(filter)
    {   
        //the reason we do books.slice because .sort changes the variable but since books is inside a useState we dont want to change it
        //so we use .slice() on books so we are basically creating a clone of it and editing the clone, and the useState renders the books automatically

        if (filter === "LOW_TO_HIGH"){
            setbooks(books.slice().sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));
        } else if (filter === "HIGH_TO_LOW") {
            setbooks(books.slice().sort((a,b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)));   
        } else if (filter === "RATING") {
            setbooks(books.slice().sort((a,b) => b.rating - a.rating));
        }
    }

    return (
        <section id="books">
            <div className="row1">
                <div className="books_container">

                    <div className="filter_selector">
                        <h3>All<span className="purple"> Books</span></h3>

                        <select id="filter" defaultValue={"DEFAULT"} onChange={(event) => filterBooks(event.target.value)}>
                            <option value="DEFAULT" disabled>Sort</option>
                            <option value="LOW_TO_HIGH"> Price, Low to High</option>
                            <option value="HIGH_TO_LOW"> Price, High to Low</option>
                            <option value="RATING">Rating</option>
                        </select>
                    </div>

                    <div className="books books_loading">
                        {/*<i className="fas fa-spinner books_loading--spinner"></i>*/}
                        {
                            books.map((book) => {
                                return <Book book={book} key={book.id}/>
                            })
                        }      
                    </div>
                </div>
            </div>
        </section>
    );
}


export default BookPage;