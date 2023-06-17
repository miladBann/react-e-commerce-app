
// the function recieves the prop book which is an entire object that originally comes from data.js 
// but each component takes the suitable books (filter) and sends here the book it needs.

function Book({book})
{
    return (
        <div className="book">
            <figure>
                <img src={book.url} alt=""/>
            </figure>

            <h6>{book.title}</h6>
            <div className="book_rating">
                {
                    //creating an empty array and filling it with zeros with the same num of the rating
                    //for every interation we return a star
                    new Array(Math.floor(book.rating)).fill(0).map((element, index) => {
                        return <i className="fas fa-star" key={index}></i>
                    })   
                }

                {
                    // adding a half star if the rating is not an integer
                    Number.isInteger(book.rating) ? '' : (<i className="fas fa-star-half-alt"></i>)
                }  
            </div>

            <div className="prices">
                { book.salePrice ? (
                    <div className="two_prices">
                        <div className="discount">
                            <p>${book.originalPrice}</p>
                        </div>

                        <div className="current_price">
                            <p>${book.salePrice}</p>
                        </div>
                    </ div>
                    ) : (
                    <div className="current_price">
                        <p>${book.originalPrice}</p>
                    </div>
                    )
                }  
            </div>
        </div>
    );
}

export default Book;