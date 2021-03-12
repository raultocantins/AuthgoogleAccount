# Getting Started Auth with Google Account
Live Demo > [AuthgoogleAccount](https://raultocantins.github.io/AuthgoogleAccount/)





## Getting client ID Google

1. Access [Google Console](console.developers.google.com) and signin with google.

2. Click in My first Project

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/1.png)

3. In new Tab click in New Project

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/2.png)

4. Choose a name for project and click in Create or Ok.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/3.png)

5. After created the project click in left tab credentials

6. And click in configure consent screen

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/4.png)

7.Select the option External and click in create.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/5.png)

8. Choose name of the App and email suport and contact details of the developer.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/6.png)
 
9. Scroll Down.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/6-2.png)

10. Next part click in save and continue.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/7.png)

11. Next part click in save and continue.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/8.png)

12.To finale settings click in return to the panel.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/9.png)

13. Click in left tab credentials after create credentials and select ID client OAuth.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/10.png)

14.Choose App type "Aplication web" and name "some name".

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/11.png)

15.Add connection Uris as example "http://localhost:3000" or "http://127.0.0.1:3000" and click in create.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/12.png)

16.Will appear new tab with your credentials, you will copy the client ID.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/finish.png)



# Create React-App

### I hope that you have installed npm and npx on your machine. 

1. Open the windows terminal and create new project react with "npx create-react-app mynameapp".
 
3. Install dependencies with command "npm i react-google-login" and keypress Enter.

4. Install dependencies with command "npm i react-google-one-tap-login" and keypress Enter.

5. Access the folder with command "cd mynameapp" and inside folder type "code . " and keypress Enter.


6. Create new folder inside src with the name "components" and inside create react component "AuthgoogleAccount.js".


![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/react1.png)

7.Import "useGoogleLogin" and "useGoogleOneTapLogin" and create a function "LoginHooks".

8.Copy code below to inside AuthgoogleAccount component.



```
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
```

9.Replace value of const clientId for your Client ID.

10.Go to App.js and import AuthgoogleAccount component as Login and replace tag <header> for him.

![imgReadme](https://github.com/raultocantins/AuthgoogleAccount/blob/master/src/assets/react4.png)

11.Now It's running app with npm start and be testing in web browser "localhost:3000".














