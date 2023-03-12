import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import App from "./App";
function Login() {
  const [user, setuser] = useState(null);
  const signin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        setuser(result.user);
        console.log(result.user);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error);
        // console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      {user ? (
        <App user={user} />
      ) : (
        <div className="outerbox">
          <div className="login">
            <h2>Welcome to MoonPlayer</h2>
            <img
              className="googlelogo"
              src="https://www.pngarts.com/files/11/Avatar-Transparent-Images.png"
              // src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
              alt=""
              onClick={signin}
            />
            <button className="loginbutton" onClick={signin}>
              <b>Sign In</b>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
