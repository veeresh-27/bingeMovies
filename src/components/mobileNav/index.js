import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./style.css";
import { useGoogleAuth } from "../../context/GoogleAuth";
import { Avatar } from "@mui/material";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";

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
            <NavLink
              to="/home"
              className={({ isActive }) => 
                      (isActive ? "lactive-class" : "not-active-class")}
            >
              <WhatshotIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">
              <MovieIcon />
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/tvshows">
              <TvIcon />{" "}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/search">
              <SearchIcon />{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavbar;
