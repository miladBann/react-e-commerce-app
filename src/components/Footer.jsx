import { Link } from "react-router-dom";
import logo from "../assets/Library.svg";

function Footer()
{

    return (
        <footer>
            <div className="row1">
                <div className="container6">
                    <figure>
                        <Link to="/"><img src={logo}  className="bottom_logo" alt="" /></Link>
                    </figure>

                    <div className="links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/books">Books</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <p>Copyright © 2021 Library</p>
                </div>
            </div>
        </footer>
    );

}

export default Footer;