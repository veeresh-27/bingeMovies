import React from "react";
import "./styles.css";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <div className="pageContianer">
      <div className="loginContainer">
        <div className="loginHeader">
          <Avatar className="avatar" sx={{ width: 1 / 4, height: 4 / 5 }} />
          <h1>Login</h1>
        </div>
        <div className="loginForm">
          <form>
            <div className="formGroup">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <button
              type="submit"
              className="loginBtn"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </form>

          <hr className="hrLine" />
          <div className="loginFooter">
            {/* TODO <div>
             Don't have an account? <a href="/register">SignUp</a>
            </div> */}
            <button className="googleBtn">SignUp with Google</button>
            <button className="facebookBtn">SignUp with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
