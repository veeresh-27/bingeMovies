import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";

function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbarLogo">LOGO</div>
      <div className="navbarItems">
        <div className="searchBox">
          <input type="text" placeholder="Search" />
        </div>
        <ul>
          <li>Options</li>
          <li>Profile</li>
          <li>
            {/* <GoogleLogout
              clientId="580112951944-f8195n6jqu4ej4du1i4608nblnchbgv9.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={() => navigate("/login")}
            ></GoogleLogout> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
