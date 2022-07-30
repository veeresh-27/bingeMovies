import React from "react";
import { UserContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function Require({ children }) {
  if (UserContext.user == null) {
    return <Navigate to="/" />;
  }
  return children;
}

export default Require;
