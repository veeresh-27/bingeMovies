import "./styles.css";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "../../context/GoogleAuth";

function Login() {
  let navigate = useNavigate();
  const { signIn } = useGoogleAuth();
  const googleSignIn = async () => {
    const googleuser = await signIn();
    if (googleuser) {
      navigate("/home", { replace: true });
    } else {
      return navigate("/");
    }
    console.log("Google User", googleuser);
  };
  return (
    <div className="pageContianer">
      <div className="loginContainer">
        <div className="loginHeader">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
