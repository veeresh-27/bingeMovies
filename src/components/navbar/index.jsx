import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Navbar() {
  const navLinkStyle = ({ isActive }) => {
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
              Home
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
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
