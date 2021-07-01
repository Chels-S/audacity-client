import React from 'react';
import Sitebar from '../components/nav/Navbar';
import Sidebar from '../components/nav/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';

function About(props) {
    return(
        <div>

            <Router>
                <Sidebar />
            </Router>
            
            <h1>About page!</h1>
            <p>This is the about page for Audacity!</p> 
        </div>
    )
}

export default About;