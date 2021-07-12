import React, {Component} from 'react';
import styled from 'styled-components';


const BackgroundBox = styled.div `
background-color: orange;
`

type AcceptedProps = {
    fetchRaids: () => void

}



export default class EternityGuide extends Component<AcceptedProps> {
    constructor(props: AcceptedProps){
        super(props);
    }


    render() {
        return (
            <BackgroundBox>
                <h1>The savage guide for Eternity - Gaia</h1>



                <h1>Basic Relativity</h1>
                <h1>Intermediate Relativity</h1>
                <h1>Advanced Relativity</h1>

            </BackgroundBox>
        )
    }
}


// const Eternity = (props) => {
//     console.log(props);

//     return (
//         <div className= "eternityGuide">
//             <h1>The savage guide for Eternity - Gaia</h1>
//             {props.raids.map((raid, index)=>{
//                         return( 
//                             <tr key={index}>
//                                 <th scope="row">{raid.id}</th>
//                                 <th>{raid.expansion}</th>
//                                 <th>{raid.nameOfFight}</th>
//                                 <th>{raid.bossName}</th>
//                                 <th>{raid.description}</th>
//                                 <th>{raid.videoLink}</th>
//                             </tr>
//                         )
//                     })}
//         </div>
       
//     )
// }


// export default Eternity;