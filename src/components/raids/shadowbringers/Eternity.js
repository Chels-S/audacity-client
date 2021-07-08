import React, {useState, useEffect, Component} from 'react';
import {Container} from 'reactstrap';

const Eternity = (props) => {
    console.log(props);

    return (
        <div className= "eternityGuide">
            <h1>The savage guide for Eternity - Gaia</h1>
            {props.raids.map((raid, index)=>{
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
        </div>
       
    )
}


export default Eternity;