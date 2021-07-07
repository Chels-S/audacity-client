import React from 'react';
// import Sitebar from '../components/nav/Navbar';
import Sidebar from '../components/nav/Sidebar';
import Sitebar from '../components/nav/testing/TestNav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Raids from '../components/raids/Raids';
import Trials from '../components/trials/Trials';
import Umbra from '../components/raids/shadowbringers/Umbra';
import Litany from '../components/raids/shadowbringers/Litany';
import Anamorphosis from '../components/raids/shadowbringers/Anamorphosis';
import Eternity from '../components/raids/shadowbringers/Eternity';
import Titania from '../components/trials/shadowbringers/Titania';
import Innocence from '../components/trials/shadowbringers/Innocence';
import Hades from '../components/trials/shadowbringers/Hades';
import SeatOfSacrifice from '../components/trials/shadowbringers/SeatOfSacrifice';
import RubyWeapon from '../components/trials/shadowbringers/RubyWeapon';
import EmeraldWeapon from '../components/trials/shadowbringers/EmeraldWeapon';
import DiamondWeapon from '../components/trials/shadowbringers/DiamondWeapon';

function About(props) {
    return(
        <div>

            <Router>
                <Sitebar clickLogout={props.clickLogout} sessionToken={props.sessionToken} />
                {/* <Sidebar clickLogout={props.clickLogout} sessionToken={props.sessionToken} /> */}
                <Switch>
                    <Route exact path='/about'><About /></Route>
                    <Route exact path='/raids'><Raids sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/trials'><Trials sessionToken={props.sessionToken} /></Route>
                    <Route exact path='/raids/umbra'><Umbra /></Route>
                    <Route exact path='/raids/litany'><Litany /></Route>
                    <Route exact path='/raids/anamorphosis'><Anamorphosis /></Route>
                    <Route exact path='/raids/eternity'><Eternity /></Route>
                    <Route exact path='/trials/titania'><Titania /></Route>
                    <Route exact path='/trials/innocence'><Innocence /></Route>
                    <Route exact path='/trials/hades'><Hades /></Route>
                    <Route exact path='/trials/seatofsacrifice'><SeatOfSacrifice /></Route>
                    <Route exact path='/trials/ruby'><RubyWeapon /></Route>
                    <Route exact path='/trials/emerald'><EmeraldWeapon /></Route>
                    <Route exact path='/trials/diamond'><DiamondWeapon /></Route>
                </Switch>
            </Router>
            
            <h1>About page!</h1>
            <p>This is the about page for Audacity!</p> 
        </div>
    )
}

export default About;