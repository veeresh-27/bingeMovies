import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "../../context/GoogleAuth";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";

function Login() {
  let navigate = useNavigate();
  const { signIn, isSignedIn, isInitialized } = useGoogleAuth();
  const googleSignIn = async () => {
    const googleuser = await signIn();
    if (googleuser) {
      navigate("/home", { replace: true });
    } else {
      return navigate("/");
    }
    console.log("Google User", googleuser);
  };
  if (isSignedIn) {
    return navigate("/home", { replace: true });
  }

  if (!isInitialized) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClipLoader color="orange" loading={!isInitialized} size={150} />
      </div>
    );
  }

  return (
    <div className="pageContianer">
      <div className="loginContainer">
        <div className="loginHeader"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
