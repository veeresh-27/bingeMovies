import React from "react";
import { useNavigate, Link } from "react-router-dom";
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
            <Link
              to="/home"
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
            >
              <WhatshotIcon />
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <MovieIcon />
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/tvshows">
              <TvIcon />{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/search">
              <SearchIcon />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavbar;
