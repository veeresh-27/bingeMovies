import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Movies from "./pages/movies";
import TvShows from "./pages/tvShows";
import Search from "./pages/search";
import MovieInfo from "./pages/movieInfo";
import MobileNavbar from "./components/mobileNav";
import Trending from "./pages/trending";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <MobileNavbar />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
                <MobileNavbar />
              </>
            }
          />
          <Route
            path="/:name"
            element={
              <>
                <Navbar />
                <Trending />
                <MobileNavbar />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Navbar />
                <Movies />
                <MobileNavbar />
              </>
            }
          />
          <Route
            path="/tvshows"
            element={
              <>
                <Navbar />
                <TvShows />
                <MobileNavbar />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Navbar />
                <Search />
                <MobileNavbar />
              </>
            }
          />
          <Route
            path="/movieinfo/:entity/:id"
            element={
              <>
                <Navbar />
                <MovieInfo />
                <MobileNavbar />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
