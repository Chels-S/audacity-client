import React, { Component} from 'react';
import APIURL from '../../helpers/Environment';



type AcceptedProps = {

}

type TrialState = {
  allTrials: [
    {
      id: number,
      expansion: string,
      nameOfFight: string,
      bossName: string,
      description: string,
      videoLink: string
    }
  ]
}


export default class TrialGuides extends Component <AcceptedProps, TrialState> {
  constructor(props: AcceptedProps){
    super(props);
    this.state={
     allTrials: [
       {
         id: 0,
         expansion: '',
         nameOfFight: '',
         bossName: '',
         description: '',
         videoLink: ''
       }
     ]
    }
    this.fetchTrials = this.fetchTrials.bind(this)
  }
  

  componentDidMount(){
    this.fetchTrials();
  }


  fetchTrials = () =>{
    fetch(`${APIURL}/trials`, {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.token
      })
  })
  .then((res) => (res.json()))
  .then((data)=> {
      this.setState({allTrials: data.allTrials})
      console.log(data);

  })
  .catch(error => console.log(error))
  }

  // raidMapper = () => {
  //   return this.state.allRaids.map((raid, index) => {
  //     return( 
  //       <tr key={index}>
  //         <th scope="row">{raid.id}</th>
  //         <th>{raid.expansion}</th>
  //         <th>{raid.nameOfFight}</th>
  //         <th>{raid.bossName}</th>
  //         <th>{raid.description}</th>
  //         <th>{raid.videoLink}</th>
  //       </tr>
  //     )
  //   })
  // }


  render(){
    return(
      <div className="main">
        <div className="mainDiv">
          <h1>Trial Guides</h1>
          {/* {this.raidMapper()} */}
        </div>

      </div>
    )
  }



}



// const Trials = props => {
//     console.log(props);

//     const [trials, setTrials] = useState([]);


    
//     const fetchTrials = async () => {
//         await fetch(`${APIURL}/trials`, {
//             method: 'GET',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.sessionToken
//             })
//         })
//         .then((res) => (res.json()))
//         .then((data)=> {
//             setTrials(data)
//             console.log(data);

//         })
//         .catch(error => console.log(error))
//     }

        


//     useEffect(() => {
//         fetchTrials();
//     }, [])


//     const tiralMapper = () => {
//         return props.trials.map((trial, index) => {
//             return( 
//                 <tr key={index}>
//                     <th scope="row">{trial.id}</th>
//                     <th>{trial.expansion}</th>
//                     <th>{trial.nameOfFight}</th>
//                     <th>{trial.bossName}</th>
//                     <th>{trial.description}</th>
//                     <th>{trial.videoLink}</th>
//                 </tr>
//             )
//         })
//     }


    

//     return (
//         <div>
//             <h1>This is the Trial guides!</h1>

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
//                     {trials.map((trial, index)=>{
//                         return( 
//                             <tr key={index}>
//                                 <th scope="row">{trial.id}</th>
//                                 <th>{trial.expansion}</th>
//                                 <th>{trial.nameOfFight}</th>
//                                 <th>{trial.bossName}</th>
//                                 <th>{trial.description}</th>
//                                 <th>{trial.videoLink}</th>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
            
//         </div>
//     )
// }

// export default Trials;