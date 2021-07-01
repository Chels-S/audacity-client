import React from 'react';

const DisplayRaids = (props) => {
    console.log(props);
    return (
        <div>
        {console.log("hello")}
            {
                props.raids.map((raids, key) => {
                    console.log(raids);
                    console.log(key);
                    return (
                        <tr key={key}>
                            <td>{raids.expansion}</td>
                            <td>{raids.nameOfFight}</td>
                            <td>{raids.bossName}</td>
                            <td>{raids.description}</td>
                            <td>{raids.videoLink}</td>
                        </tr>
                    )
                })
            }
        </div>
    )
}

export default DisplayRaids;