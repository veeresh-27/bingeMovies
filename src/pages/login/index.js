import React, { useEffect, useContext } from "react";
import "./styles.css";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
// import { useState } from "react";
// import { gapi } from "gapi-script";
import { UserContext } from "../../context/AuthContext";
import { useGoogleAuth } from "../../context/GoogleAuth";

function Login() {
  let navigate = useNavigate();
  var { user, setUser } = useContext(UserContext);
  // const clientId =
  //   "580112951944-572hof81l7e22eesovvqivhb6n7ab2bh.apps.googleusercontent.com";
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "profile email",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // });

  // const onLoginSuccess = (response) => {
  //   console.log(response);
  //   alert("Login Success");
  //   setUser(response.profileObj);
  //   navigate("/home");
  // };
  // const onLoginFailure = (response) => {
  //   alert(response);
  // };
  console.log("User", user);
  const { signIn, isSignedIn } = useGoogleAuth();
  const googleSignIn = async () => {
    const googleuser = await signIn();
    if(googleuser) {
      navigate("/home", { replace: true });
    }
    else{
      return navigate("/");
    }
    console.log("Google User", googleuser);
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
            <button className="googlebtn" onClick={googleSignIn}>
              Google SignIn
            </button>

            <button className="facebookBtn">SignUp with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
