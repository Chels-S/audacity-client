import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logoutGoob from '../../assets/logoutGoob.png';
import { Route, Link, Switch } from "react-router-dom";

// import './Nav.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
    } from 'reactstrap';

// import ProtectedRoute from "../RoleAuth/services/ProtectedRoute";
import Logout from '../Logout/Logout';
import About from '../nav/NavSwitch';
import Raids from '../raids/Raids';
import Trials from '../trials/Trials';
import Admin from '../../pages/AdminRoute';
import Mounts from '../../pages/Mounts';


// const Component = ({prop1, prop2.... }) alternate way of passing props


const Sidebar = (props) => {
   

    return(
        <div className="sidebar">
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'><img className="logoPic" src={logoutGoob}/></Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/raids'>Raids</Link></li>
                    <li><Link to='/trials'>Trials</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/mounts'>Mounts</Link></li>
                    <li><Button onClick= {props.clickLogout}>Logout</Button></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
