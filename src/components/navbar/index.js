import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./styles.css";
import { useGoogleAuth } from "../../context/GoogleAuth";
import { Avatar } from "@mui/material";import ClipLoader from "react-spinners/ClipLoader";
import ProfileMenue from "../profileMenu";

function Navbar() {
  let navigate = useNavigate();
  const { signOut, isSignedIn, isInitialized, googleUser } = useGoogleAuth();
  const googleSignOut = () => {
    window.confirm("Do you want to sign out?") && signOut() && navigate("/");
  };
  console.log("Current User", googleUser);
  // useEffect(() => {
  //   if (isSignedIn === false && isInitialized === true) {
  //     navigate("/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSignedIn, isInitialized]);
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "orange" : "white",
      transition: "all 0.3s ease-in-out",
    };
  };
  if (!isInitialized) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <ClipLoader color="orange" loading={!isInitialized} size={150} />
      </div>
    );
  }

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

          <li>
            <ProfileMenue googleSignOut={googleSignOut} user={googleUser.profileObj} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
