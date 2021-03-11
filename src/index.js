import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
function App() {
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

  return (
    <div className="App">
      <h1>Google Account Sign IN</h1>
      {userEmail ? (
        <div className="boxProfile">
          <h4>Your Name is: {userName}</h4>
          <h4>Your Email is: {userEmail}</h4>
          <img src={userImg} alt="imgProfile" />
        </div>
      ) : (
        ""
      )}
      <p>
        Enter with your Google Account and seeing your
        UserName-UserEmail-UserImage
      </p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
