import React from "react";
import "./styles.css";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GoogleLogin,GoogleLogout } from "react-google-login";
import { useState} from "react";


function Login() {
  let navigate = useNavigate();
  const clientId =
    "580112951944-f8195n6jqu4ej4du1i4608nblnchbgv9.apps.googleusercontent.com";
    const [showLogin, setShowLogin] = useState(false);
  const onLoginSuccess = (response) => {
    console.log(response);
    alert("Login Success");
    setShowLogin(false);
  };
  const onLoginFailure = (response) => {
    console.log(response);
  };
  const onSignOutSuccess = (response) => {
    console.log(response);
    alert("Logout Success");
    setShowLogin(true);
  }
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
            {
              showLogin ? <GoogleLogin
              clientId={clientId}
              buttonText="SignUp with Google"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
            />:
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={onSignOutSuccess}/>
            }
            
            <button className="facebookBtn">SignUp with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
