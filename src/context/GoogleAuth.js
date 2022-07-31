import React, { useEffect } from "react";
import { useGoogleLogin } from "react-use-googlelogin";
import { gapi } from "gapi-script";

const GoogleAuthContext = React.createContext(); // Not necessary, but recommended.
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID, //clientID from Google.
  });
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {/* The rest of your app */}
      {children}
    </GoogleAuthContext.Provider>
  );
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
