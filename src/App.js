import React, {useEffect, useState} from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import NavBarTop from './components/nav/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
// import Sitebar from './components/nav/Navbar';
// import Sitebar from './components/nav/testing/TestNav';
// import Sidebar from './components/nav/Sidebar';
// import ToggleComponent from './components/ToggleComponent';






function App() {


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
    <NavBarTop sessionToken = {sessionToken} clickLogout={clearToken} /> :
    <Auth updateToken={updateToken} />
  }



  return (
    <div className="App">
      <Router>
      {/* <Sidebar clickLogout={clearToken} /> */}
      {/* <Sitebar /> */}

      </Router>
      {/* <h1>Audacity Guides!</h1> */}
      {protectedViews()}
    </div>
  );
}

export default App;
