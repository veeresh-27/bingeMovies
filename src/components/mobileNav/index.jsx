import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HomeIcon from "@mui/icons-material/Home";
function MobileNavbar() {
  const navLinkStyle = ({ isActive }) => {
    // isActive ? {color:'orange'} : {color:'white'}
    return {
      color: isActive ? "orange" : "white",
      transition: "all 0.3s ease-in-out",
    };
  };

  return (
    <div className="mobileNavbar">
      <div className="mobileNavbarItems">
        <ul>
          <li>
            <NavLink to="/home" style={navLinkStyle}>
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" style={navLinkStyle}>
              <MovieIcon />
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/tvshows" style={navLinkStyle}>
              <TvIcon />{" "}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/search" style={navLinkStyle}>
              <SearchIcon />{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavbar;
