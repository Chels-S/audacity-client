import React, {useState, useEffect, Component} from 'react';
import {Container} from 'reactstrap';



const Trials = props => {
    console.log(props);

    const [trials, setTrials] = useState([]);


    
    const fetchTrials = async () => {
        await fetch(`http://localhost:3005/trials`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then((res) => (res.json()))
        .then((data)=> {
            setTrials(data)
            console.log(data);

        })
        .catch(error => console.log(error))
    }

        


    useEffect(() => {
        fetchTrials();
    }, [])


    const tiralMapper = () => {
        return props.trials.map((trial, index) => {
            return( 
                <tr key={index}>
                    <th scope="row">{trial.id}</th>
                    <th>{trial.expansion}</th>
                    <th>{trial.nameOfFight}</th>
                    <th>{trial.bossName}</th>
                    <th>{trial.description}</th>
                    <th>{trial.videoLink}</th>
                </tr>
            )
        })
    }


    

    return (
        <div>
            <h1>This is the Trial guides!</h1>

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
                    {trials.map((trial, index)=>{
                        return( 
                            <tr key={index}>
                                <th scope="row">{trial.id}</th>
                                <th>{trial.expansion}</th>
                                <th>{trial.nameOfFight}</th>
                                <th>{trial.bossName}</th>
                                <th>{trial.description}</th>
                                <th>{trial.videoLink}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Trials;