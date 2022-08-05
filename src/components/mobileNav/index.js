import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";
import { useGoogleAuth } from "../../context/GoogleAuth";
import { Avatar } from "@mui/material";

function MobileNavbar() {
  let navigate = useNavigate();
  const { signOut } = useGoogleAuth();
  const googleSignOut = () => {
    alert("Logout Success");
    signOut();
    navigate("/");
  };
  return (
    <div className="mobileNavbar">
      <div className="mobileNavbarItems">
        <ul>
          <li>
            <Link to="/home">Trending</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            {" "}
            <Link to="/tvshows">Series</Link>
          </li>
          <li>
            {" "}
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavbar;
