import React, { useEffect } from "react";
import "./styles.css";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useState } from "react";
import { gapi } from "gapi-script";

function Login() {
  let navigate = useNavigate();
  const clientId =
    "580112951944-572hof81l7e22eesovvqivhb6n7ab2bh.apps.googleusercontent.com";
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email",
      });
    }
    gapi.load("client:auth2", start);
  });
  const [showLogin, setShowLogin] = useState(true);
  const onLoginSuccess = (response) => {
    console.log(response);
    alert("Login Success");
    console.log("showLogin", showLogin);
    setShowLogin(false);
  };
  const onLoginFailure = (response) => {
    console.log(response);
  };
  const onSignOutSuccess = (response) => {
    console.log(response);
    alert("Logout Success");
    setShowLogin(true);
    console.log("showLogin", showLogin);
  };
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
            {/* <button className="googleBtn">SignUp with Google</button> */}
            {showLogin ? (
              <GoogleLogin
                clientId={clientId}
                buttonText="SignUp with Google"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            ) : (
              <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSignOutSuccess}
                isSignedIn={false}
              />
            )}

            <button className="facebookBtn">SignUp with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
