import React from "react";
import { useNavigate,Link } from "react-router-dom";
import "./styles.css";
import { useGoogleAuth } from "../../context/GoogleAuth";
import { Avatar } from "@mui/material";

function Navbar() {
  let navigate = useNavigate();
  const { signOut, isSignedIn } = useGoogleAuth();
  const googleSignOut = () => {
    alert("Logout Success");
    signOut()
    navigate("/");
  };
  //console.log("Google User", googleUser);
  return (
    <>
      {isSignedIn && (
        <div className="navbar">
          <div className="navbarLogo" onClick={()=> window.scroll(0,0)}>LOGO</div>
          <div className="navbarItems">
            
            <ul>
              <li><Link to="/home">Trending</Link></li> 
              <li><Link to="/movies">Movies</Link></li>
              <li> <Link to="/tvshows">Series</Link></li>
              <li> <Link to="/search">Search</Link></li>

              <li onClick={googleSignOut}><Avatar/></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
