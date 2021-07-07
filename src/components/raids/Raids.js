import React, {useState, useEffect, Component} from 'react';
import DisplayRaids from './RaidMap';
// import RaidIndex from './RaidIndex';
import {Container} from 'reactstrap';


const Raids = props => {
    console.log(props);

    const [raids, setRaids] = useState([]);


    
    const fetchRaids = async () => {
        await fetch(`http://localhost:3005/raids`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then((res) => (res.json()))
        .then((data)=> {
            setRaids(data)
            console.log(data);

        })
        .catch(error => console.log(error))
    }

        


    useEffect(() => {
        fetchRaids();
    }, [])


    const raidMapper = () => {
        return props.raids.map((raid, index) => {
            return( 
                <tr key={index}>
                    <th scope="row">{raid.id}</th>
                    <th>{raid.expansion}</th>
                    <th>{raid.nameOfFight}</th>
                    <th>{raid.bossName}</th>
                    <th>{raid.description}</th>
                    <th>{raid.videoLink}</th>
                </tr>
            )
        })
    }


    

    return (
        <div>
            <h1>This is the raid guides!</h1>

            <table>
                <thead>
                    <tr>
                        <th>Expansion</th>
                        <th>Name of Fight</th>
                        <th>Boss Name</th>
                        <th>Description</th>
                        <th>Video Link</th>
                    </tr>
                </thead>
                <tbody>
                    {raids.map((raid, index)=>{
                        return( 
                            <tr key={index}>
                                <th scope="row">{raid.id}</th>
                                <th>{raid.expansion}</th>
                                <th>{raid.nameOfFight}</th>
                                <th>{raid.bossName}</th>
                                <th>{raid.description}</th>
                                <th>{raid.videoLink}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Raids;