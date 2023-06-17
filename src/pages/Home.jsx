import Landing from "../components/Landing.jsx";
import HighLights from "../components/HighLights.jsx";
import FeaturedBooks from "../components/FeaturedBooks.jsx";
import DiscountedBooks from "../components/DiscountedBooks.jsx";
import ExploreMore from "../components/ExploreMore.jsx";

function Home()
{

    return(
        <>
        <Landing />
        <HighLights />
        <FeaturedBooks />
        <DiscountedBooks />
        <ExploreMore />
        </>
    );
}

export default Home;