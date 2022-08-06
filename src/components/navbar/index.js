import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./styles.css";
import { useGoogleAuth } from "../../context/GoogleAuth";
import { Avatar } from "@mui/material";

function Navbar() {
  let navigate = useNavigate();
  const { signOut, isSignedIn } = useGoogleAuth();
  const googleSignOut = () => {
    alert("Logout Success");
    signOut();
    isSignedIn && navigate("/");
  };
  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navLinkStyle = ({ isActive }) => {
    // isActive ? {color:'orange'} : {color:'white'}
    return {
      color: isActive ? "orange" : "white",
      transition: "all 0.3s ease-in-out",
    };
  };

  return (
    <div className="navbar">
      <div className="navbarLogo" onClick={() => window.scroll(0, 0)}>
        LOGO
      </div>
      <div className="navbarItems">
        <ul>
          <li className="topItems">
            <NavLink to="/home" style={navLinkStyle}>
              Trending
            </NavLink>
          </li>
          <li className="topItems">
            <NavLink to="/movies" style={navLinkStyle}>
              Movies
            </NavLink>
          </li>
          <li className="topItems">
            {" "}
            <NavLink to="/tvshows" style={navLinkStyle}>
              Series
            </NavLink>
          </li>
          <li className="topItems">
            {" "}
            <NavLink to="/search" style={navLinkStyle}>
              Search
            </NavLink>
          </li>

          <li onClick={googleSignOut}>
            <Avatar />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
