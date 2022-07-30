import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";
import { GoogleLogout } from "react-google-login";
import { UserContext } from "../../context/AuthContext";
import { useGoogleAuth } from "../../context/GoogleAuth";

function Navbar() {
  var { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();
  const { signOut, isSignedIn, googleUser } = useGoogleAuth();
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
          <div className="navbarLogo">LOGO</div>
          <div className="navbarItems">
            <div className="searchBox">
              <input type="text" placeholder="Search" />
            </div>
            <ul>
              <li>Options</li>
              <li>Settings</li>

              <li onClick={googleSignOut}>Logout</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
