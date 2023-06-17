import {books} from "../data.js";
import Book from "./Book.jsx";

function DiscountedBooks()
{
    return (
        <section id="section4">
            <div class="row1">
                <div class="container4">
                    <h3>Discounted<span class="purple"> Books</span></h3>
                    
                    <div class="books">
                        {
                            books.filter((book) => book.salePrice > 0)
                            .slice(0, 8).map((book) => {
                                return <Book book={book} key={book.id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    );
}

export default DiscountedBooks;