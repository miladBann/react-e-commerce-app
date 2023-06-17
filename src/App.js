import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import BookPage from "./pages/BookPage.jsx";
import {books} from "./data.js";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" render={() => <BookPage books={books}/>}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
