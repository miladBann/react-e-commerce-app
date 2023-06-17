import landingPic from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";

function Landing()
{
    return (
        <section id="section1">
            <div className="row1">
                <div className="container1">

                    <h1>Israel's most awarded online library platform</h1>
                    <h3>Find your dream book with<span className="purple"> Library</span></h3>
                    <button><Link to="#section3">Browse books</Link></button>

                    <figure>
                        <img src={landingPic} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Landing;