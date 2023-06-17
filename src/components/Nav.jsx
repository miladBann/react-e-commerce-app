import "../index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "../assets/Library.svg";
import { Link } from "react-router-dom";


function Nav() {

    function openMenu() {
        document.body.classList += " menu--open"
    }
    
    
    function closeMenu() {
        document.body.classList.remove("menu--open")
    }

    
    return (
        <div className="row1">
            <nav className="navigation">
                <ul>
                    <li>
                        <figure>
                            <Link to="/"><img src={`${logo}`} alt="logo" /></Link>
                        </figure>
                    </li>

                    <div className="right_nav">
                        <li><Link to="/">Home</Link></li>
                        <li className="special"><Link to="/books">Books</Link></li>
                        <li>
                            <Link to="/cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i></Link> 
                            <span className="number">2</span>
                        </li>
                    </div>


                    <button className="btn__menu" onClick={openMenu}>
                    <i className="fas fa-bars"></i>
                    </button>
        
                    <div className="menu__backdrop">
                        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                            <i className="fas fa-times"></i>
                        </button>
                        <ul className="menu__links">
                            <li className="menu__list"><Link to="/" className="menu__link" onClick={closeMenu}>Home</Link></li>
                            <li className="menu__list"><Link to="books.html" className="menu__link btn_books" onClick={closeMenu}>Books</Link></li>
                            <li>
                                <Link to="/cart"><i className="fa-sharp fa-solid fa-cart-shopping cart2"></i></Link>
                                <span classNameName="number">2</span>
                            </li>
                        </ul>
                    </div>
                </ul>  
            </nav>
        </div>
    );
}

export default Nav;