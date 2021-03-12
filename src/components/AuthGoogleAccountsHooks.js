import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import GoogleSvg from "../assets/google.svg";
import './AuthGoogleAccountsHooks.css'
// refresh token
//import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  "240775385130-t0aq4oa51oigpkat8vianrrm6595qd1t.apps.googleusercontent.com";

function LoginHooks() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImg, setUserImg] = useState("");

  useGoogleOneTapLogin({
    onError: (error) => console.log(error),
    onSuccess: (response) => {
      setUserName(response.given_name);
      setUserEmail(response.email);
      setUserImg(response.picture);
    },
    googleAccountConfigs: {
      client_id:
        "240775385130-t0aq4oa51oigpkat8vianrrm6595qd1t.apps.googleusercontent.com",
    },
  });

  const onSuccess = (res) => {
    setUserName(res.profileObj.givenName);
    setUserEmail(res.profileObj.email);
    setUserImg(res.profileObj.imageUrl);

    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
  
    alert(`Failed to login. ${res.details}`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div>
      <button onClick={signIn} className="button">
        <img src={GoogleSvg} alt="google login" className="icon"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
      {userEmail ? (
        <div className="boxProfile">
          <h4>Your Name is: {userName}</h4>
          <h4>Your Email is: {userEmail}</h4>
          <img src={userImg} alt="imgProfile" className="imgProfile" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoginHooks;
