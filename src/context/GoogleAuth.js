import React, { useEffect } from "react";
import { useGoogleLogin } from "react-use-googlelogin";
import { gapi } from "gapi-script";

const GoogleAuthContext = React.createContext(); // Not necessary, but recommended.
const clientId =
  "580112951944-572hof81l7e22eesovvqivhb6n7ab2bh.apps.googleusercontent.com";
export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: clientId, //clientID from Google.
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
      {children}
    </GoogleAuthContext.Provider>
  );
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
