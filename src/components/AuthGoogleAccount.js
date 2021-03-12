import React, { useState } from "react";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import { GoogleLogin } from 'react-google-login';

const clientId =
  '240775385130-t0aq4oa51oigpkat8vianrrm6595qd1t.apps.googleusercontent.com';
function Login() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userImg, setUserImg] = useState("");
    
    
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        console.log(res)
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
      //  refreshTokenSetup(res);
      };
    
      const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
      };
    
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
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
      </div>
    );
  }
  export default Login;

