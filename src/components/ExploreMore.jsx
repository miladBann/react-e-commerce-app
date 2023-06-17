import { Link } from "react-router-dom";

function ExploreMore()
{
    return (
        <section id="section5">
            <div className="row1">
                <div className="container5">
                    <h1>Explore more<span className="purple"> Books</span></h1>
                    <button><Link to="#section3">Explore books</Link></button>
                </div>
            </div>
        </section>
    );
}

export default ExploreMore;