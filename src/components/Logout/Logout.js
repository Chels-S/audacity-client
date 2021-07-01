import React from 'react';
import logoutGoob from '../../assets/logoutGoob.png';

const Logout = (props) => {
    return (
        <div>
            <img id ="logout" src={logoutGoob} alt="goobbue" onClick={props.clearSession} />

        </div>
    )
}

export default Logout;