import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class AudacMounts extends Component {
    state = {mounts: []};

    componentDidMount() {
        this.fetchMounts();
    }


    fetchMounts = () => {
        fetch('https://xivapi.com/character/31743615/?data=MIMO', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            const {message} = json;
            this.setState({mounts: message});
            console.log(message);
        })
        .catch((error)=> {
            console.log(error);
        })
    }


    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Mira's Mounts: </h1>
                    <img src={this.state.mounts} alt="mounts"/>
                </div>
            </div>
        )
    }
}