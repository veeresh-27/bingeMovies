import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Movies from "./pages/movies";
import TvShows from "./pages/tvShows";
import Search from "./pages/search";
import MovieInfo from "./pages/movieInfo";

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
      </Router>
    </div>
  );
}

export default App;
