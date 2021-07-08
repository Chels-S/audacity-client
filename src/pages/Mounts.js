import React, {Component} from 'react';
import {Button} from 'reactstrap';
import SingleMount from './SingleMount';

export default class AudacMounts extends Component {
    constructor(){
        super()
        this.state = {mounts: []};
    }
    

    // componentDidMount() {
    //     this.fetchMounts();
    // }


    fetchMounts = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://xivapi.com/character/31743615/?data=MIMO', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then(response => response.json())
        .then((res) => {
            // for (let i = 0; i < res.length; i++){
                this.setState({
                    mounts: res.Mounts[0].Icon
                })
                console.log(res.Mounts);

            // }
        })
        .catch((error)=> {
            console.log(error);
        })
    }

    // renderItems(){
    //     return this.state.mounts.map((item) => {
    //         <SingleMount key={item.mounts} item={item.mounts} />;
    //     })
    // }


    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Mira's Mounts: </h1>
                    <button onClick={() => this.fetchMounts()}>Fetch!</button>
                    <img src={this.state.mounts} alt="mounts"/>
                </div>
            </div>
        )
    }
}