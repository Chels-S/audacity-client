import React  from 'react';
import ToggleComponent from '../ToggleComponent';

const Auth = props => {
    return (
        <ToggleComponent updateToken={props.updateToken} />
    )
}

export default Auth;