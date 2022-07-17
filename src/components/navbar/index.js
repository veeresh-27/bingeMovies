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
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
