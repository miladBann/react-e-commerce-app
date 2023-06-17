import HighlightCard from "./HighlightCard.jsx";

function HighLights()
{
    return (
        <section id="section2" className="row1">

            <div >
                <div className="container2">
                    <h3>Why choose<span className="purple"> Library</span></h3>
                    
                    <div className="features">
                        <HighlightCard logo="fa-solid fa-bolt-lightning" title="Easy and Quick" paragraph="Get access to the book you purchased online instantly"/>
                        <HighlightCard logo="fa-solid fa-book-open" title="10,000 Books" paragraph="Library has books in all your favorite categories"/>
                        <HighlightCard logo="fa-solid fa-tags" title="Affordable" paragraph="Get your hands on popular books for as little as $10"/>
                    </div>  
                </div>
            </div>
        </section>
    );
}


export default HighLights;