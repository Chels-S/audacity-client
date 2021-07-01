import React, {useEffect, useState} from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import About from './pages/About';
import Sitebar from './components/nav/Navbar';
import Sidebar from './components/nav/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import ToggleComponent from './components/ToggleComponent';


function App() {

  // return (
  //   <div>
  //     <ToggleComponent />
  //   </div>
  // )

  const [sessionToken, setSessionToken] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    };
  });

  const updateToken = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined)
  }

  const protectedViews = () => {
    return sessionToken === localStorage.getItem('token') ?
    <About sessionToken = {sessionToken} /> :
    <Auth updateToken={updateToken} />
  }




  return (
    <div className="App">
      {/* <ToggleComponent /> */}
      {/* <Router>
        <Sidebar />
      </Router> */}
      <Sitebar clickLogout={clearToken} />
      {/* <h1>Audacity Guides!</h1> */}
      {protectedViews()}
    </div>
  );
}

export default App;
