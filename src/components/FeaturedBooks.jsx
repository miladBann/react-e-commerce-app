import Book from "./Book";
import { books } from "../data.js";

function FeaturedBooks()
{

    return (
        <section id="section3">
            <div className="row1">
                <div className="container3">
                    <h3>Featured<span className="purple"> Books</span></h3>

                    <div className="books">
                        {
                            books.filter((book) => {
                                return book.rating === 5;
                            }).slice(0, 4).map((book) => {
                                return <Book book={book} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedBooks;