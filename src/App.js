import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Movies from "./pages/movies";
import TvShows from "./pages/tvShows";
import Search from "./pages/search";
import MovieInfo from "./pages/movieInfo";
import Footer from "./components/footer";
import MobileNavbar from "./components/mobileNav";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movieinfo/:entity/:id" element={<MovieInfo />} />
        </Routes>
        <MobileNavbar/>
      </Router>
    </div>
  );
}

export default App;
