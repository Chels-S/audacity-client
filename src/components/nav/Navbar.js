import React from 'react';
// import Sitebar from '../components/nav/Navbar';
// import Sidebar from '../components/retired/Sidebar';
import Sitebar from './TestNav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from '../../pages/About';
import Raids from '../raids/Raids';
import Trials from '../trials/Trials';
import Umbra from '../raids/shadowbringers/Umbra';
import Litany from '../raids/shadowbringers/Litany';
import Anamorphosis from '../raids/shadowbringers/Anamorphosis';
import Eternity from '../raids/shadowbringers/Eternity';
import Titania from '../trials/shadowbringers/Titania';
import Innocence from '../trials/shadowbringers/Innocence';
import Hades from '../trials/shadowbringers/Hades';
import SeatOfSacrifice from '../trials/shadowbringers/SeatOfSacrifice';
import RubyWeapon from '../trials/shadowbringers/RubyWeapon';
import EmeraldWeapon from '../trials/shadowbringers/EmeraldWeapon';
import DiamondWeapon from '../trials/shadowbringers/DiamondWeapon';
import AudacMounts from '../../pages/Mounts';
import AllGuides from '../../pages/Admin';
import CreateGuide from '../trials/CreateTrial';

function NavBar(props) {
    return(
        <div>

            <Router>
                <Sitebar clickLogout={props.clickLogout} sessionToken={props.sessionToken} />
                {/* <Sidebar clickLogout={props.clickLogout} sessionToken={props.sessionToken} /> */}
                <Switch>
                    <Route exact path='/'><About /></Route>
                    <Route exact path='/mounts'><AudacMounts /></Route>
                    <Route exact path='/admin'><AllGuides sessionToken={props.sessionToken} /></Route>
                    <Route exact path='/trials/create'><CreateGuide /></Route>
                    <Route exact path='/raids'><Raids sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/trials'><Trials sessionToken={props.sessionToken} /></Route>
                    <Route exact path='/raids/umbra'><Umbra /></Route>
                    <Route exact path='/raids/litany'><Litany /></Route>
                    <Route exact path='/raids/anamorphosis'><Anamorphosis /></Route>
                    <Route exact path='/raids/eternity'><Eternity sessionToken={props.sessionToken} /></Route>
                    <Route exact path='/trials/titania'><Titania /></Route>
                    <Route exact path='/trials/innocence'><Innocence /></Route>
                    <Route exact path='/trials/hades'><Hades /></Route>
                    <Route exact path='/trials/seatofsacrifice'><SeatOfSacrifice /></Route>
                    <Route exact path='/trials/ruby'><RubyWeapon /></Route>
                    <Route exact path='/trials/emerald'><EmeraldWeapon /></Route>
                    <Route exact path='/trials/diamond'><DiamondWeapon /></Route>
                </Switch>
            </Router>
            
            {/* <h1>About page!</h1>
            <p>This is the about page for Audacity!</p>  */}
        </div>
    )
}

export default NavBar;