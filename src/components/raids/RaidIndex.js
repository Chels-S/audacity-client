import React, {useState, useEffect, Component} from 'react';
import DisplayRaids from './RaidMap';
import RaidList from './RaidMap';



export default class Raids extends Component {
    constructor(props){
        super(props);
        this.state={
            raids: ["Alexander", "Omega"]
        }
    }

    componentDidMount() {
        this.fetchRaids();
    }

    fetchRaids = (props) => {
                fetch(`http://localhost:3005/raids`, {
                    method: 'GET',
                    // headers: new Headers({
                    //     'Content-Type': 'application/json',
                    //     'Authorization': props.sessionToken
                    // })
                })
                .then((res) => (res.json()))
                .then((data)=> {
                    const {info} = data;
                    this.setState({raids: info })
                    console.log(info);
        
                })
                .catch(error => console.log(error))
            }

    render(){
        return(
            <div>
                <RaidList raids={this.state.raids} />
            </div>
        )
    }
}