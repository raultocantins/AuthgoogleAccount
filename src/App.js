import React from "react";
import "./App.css";
import Login from "./components/AuthGoogleAccountsHooks";

function App() {
  return (
    <div className="App">
      <h2>Auth With Google Account</h2>
      <p>Getting Users Data as Email-Name-Image with Google OAuth</p>
      <Login />
    </div>
  );
}

export default App;