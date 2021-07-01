import React, {useState, useEffect, Component} from 'react';
import DisplayRaids from './RaidMap';


export default class Raids extends Component {
    state = {
        loading: true,
        raids: []
    };


    async componentDidMount(props) {
        const response = await
            fetch(`http://localhost:3005/raids`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.sessionToken
                })
            });
            const data = await response.json();
            this.setState({raids: data.results[0], loading: false});
            
            // .then((res) => (res.json()))
            // .then((data)=> {
            //     this.setState({raids: data.results[0], loading: false});
            // })
            // .catch(error => console.log(error))
        }

        // const url = "http://localhost:3005/raids";
        // const response = await fetch (url);
        // const data = await response.json();
        // this.setState({raids: data.results[0], loading: false});
    

    render(){
        if (this.state.loading){
            return <div>loading...</div>
        }

        if (!this.state.raids) {
            return <div>didn't find any raids</div>;
        } 

        return (
            <div>
                <div>{this.state.raids.expansion}</div>
                <div>{this.state.raids.nameOfFight}</div>
            </div>
        )
    }

}

























// const Raids = props => {
//     console.log(props);

//     const [raids, setRaids] = useState([]);



    // const fetchRaids = () => {
    //     fetch(`http://localhost:3005/raids`, {
    //         method: 'GET',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.sessionToken
    //         })
    //     })
    //     .then((res) => (res.json()))
    //     .then((data)=> {
    //         setRaids(data)
    //         console.log(data);

    //     })
    //     .catch(error => console.log(error))
    // }

//     useEffect(() => {
//         fetchRaids();
//     }, [])

//     fetchRaids();

//     const raidMapper = (props) => {
//         return raids.map((raid, index) => {
//             return( 
//                 <tr key={index}>
//                     <th scope="row">{raid.id}</th>
//                     <th>{raid.expansion}</th>
//                     <th>{raid.nameOfFight}</th>
//                     <th>{raid.bossName}</th>
//                     <th>{raid.description}</th>
//                     <th>{raid.videoLink}</th>
//                 </tr>
//             )
//         })
//     }



//     return (
//         <div>
//             <h1>This is the raid guides!</h1>







//             <table>
//                 <thead>
//                     <tr>
//                         <th>Expansion</th>
//                         <th>Name of Fight</th>
//                         <th>Boss Name</th>
//                         <th>Description</th>
//                         <th>Video Link</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <DisplayRaids raids={raids}/>
//                 </tbody>
//             </table>
            
//         </div>
//     )
// }

// export default Raids;