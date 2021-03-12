  
import React from 'react';
import './App.css';
import Login from './components/AuthGoogleAccount';
import LoginHooks from './components/AuthGoogleAccountsHooks'


function App() {
  return (
    <div className="App">
      <h2>The Components way</h2>
      <LoginHooks />    
     
    </div>
  );
}

export default App;