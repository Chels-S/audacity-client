import React, {useState} from 'react';
import Logout from '../Logout/Logout';
import logoutGoob from '../../assets/logoutGoob.png';
import {//1
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
    } from 'reactstrap';

const Sitebar = (props) => {
    console.log(props);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }


    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Audacity Guides</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <navItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </navItem>
                </Nav>
            </Collapse>
        </Navbar>
        // <div>
        //     <nav>
        //         <img id="logoutGoob" src={logoutGoob} alt="goob"/>
        //         <Logout clearSession ={props.clearSession} />
        //     </nav>
        // </div>
    )
}

export default Sitebar;