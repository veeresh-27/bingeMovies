import "./App.css";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import { useGoogleAuth } from "./context/GoogleAuth"
import Movies from "./pages/movies";
import TvShows from "./pages/tvShows";
import { Search } from "@material-ui/icons";
// import {useEffect,useContext} from 'react'
// import {UserContext} from './context/UserContext'
//import Require from "./components/require";
function App() {
  //const navigate = useNavigate();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/tvshows" element={<TvShows/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
