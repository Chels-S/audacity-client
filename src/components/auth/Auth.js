import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
// import Login from '../login/Login';
// import Register from '../register/Register';
import ToggleComponent from '../ToggleComponent';

const Auth = props => {
    return (

        <ToggleComponent updateToken={props.updateToken} />

        // <Container className="auth-container">
        //     <Row>
        //         <Col md="6">
        //             <Register updateToken={props.updateToken} />
        //         </Col>
        //         <Col md="6" className="login-col">
        //             <Login updateToken={props.updateToken}/>
        //         </Col>
        //     </Row>
        // </Container>


        // <div>
        //     <Login updateToken = {props.updateToken}/>
        //     <Register updateToken = {props.updateToken}/>

        // </div>
    )
}

export default Auth;