import "./App.css";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/navbar";
// import {useEffect,useContext} from 'react'
// import {UserContext} from './context/UserContext'
import Require from "./components/require";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
