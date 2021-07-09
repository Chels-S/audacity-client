import React, {useState, useEffect, Component} from 'react';
// import { Card, Col, Row } from 'antd';
import APIURL from '../../helpers/Environment';
// import UmbraImage from '../../assets/umbraImage.png';
// import LitanyImage from '../../assets/litanyImage.png';
// import AnamorphosisImage from '../../assets/anamorphosisImage.png';
// import Eternity from './shadowbringers/Eternity';
// import Anamorphosis from './shadowbringers/Anamorphosis';

type AcceptedProps = {

}

type RaidState = {
  
      id: number,
      expansion: string,
      nameOfFight: string,
      bossName: string,
      description: string,
      videoLink: string
   
}


export default class RaidGuides extends Component <AcceptedProps, RaidState> {
  constructor(props: AcceptedProps){
    super(props);
    this.state={
    
         id: 0,
         expansion: '',
         nameOfFight: '',
         bossName: '',
         description: '',
         videoLink: ''
     
    }
    this.fetchRaids = this.fetchRaids.bind(this)
  }
  

  
  componentDidMount(){
    console.log("Compnent Did Mount");
    this.fetchRaids();
  }

  fetchRaids = () =>{
    fetch(`${APIURL}/raids`, {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.token
      })
  })
  .then((res) => (res.json()))
  .then((data)=> {
      this.setState({
        // allRaids: data.allRaids
        expansion: data.expansion
      })
      console.log(data);

  })
  .catch(error => console.log(error))
  }

  // raidMapper = () => {
  //   return this.state.allRaids.map((raid, index) => {
  //     return( 
  //       <div key={index}>
  //         <h3 >{raid.id}</h3>
  //         <h3>{raid.expansion}</h3>
  //         <h3>{raid.nameOfFight}</h3>
  //         <h3>{raid.bossName}</h3>
  //         <h3>{raid.description}</h3>
  //         <h3>{raid.videoLink}</h3>
  //       </div>
  //     )
  //   })
  // }


  render(){
    return(
      <div className="main">
        <div className="mainDiv">
          <h1>Raid Guides</h1>
          {/* {this.raidMapper()} */}
        </div>

      </div>
    )
  }



}





// const Raids = props => {
//     console.log(props);
    
//     const { Meta } = Card;
//     const [raids, setRaids] = useState([]);


    
//     const fetchRaids = async () => {
//         await fetch(`${APIURL}/raids`, {
//             method: 'GET',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.sessionToken
//             })
//         })
//         .then((res) => (res.json()))
//         .then((data)=> {
//             setRaids(data)
//             console.log(data);

//         })
//         .catch(error => console.log(error))
//     }

        


//     useEffect(() => {
//         fetchRaids();
//     }, [])


//     const raidMapper = () => {
//         return props.raids.map((raid, index) => {
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
//                     {raids.map((raid, index)=>{
//                         return( 
//                             <tr key={index}>
//                                 {/* <th scope="row">{raid.id}</th>
//                                 <th>{raid.expansion}</th>
//                                 <th>{raid.nameOfFight}</th>
//                                 <th>{raid.bossName}</th>
//                                 <th>{raid.description}</th>
//                                 <th>{raid.videoLink}</th> */}
                            
//                     {/* <Eternity raids={raids} /> */}
            

//             {/* <Card
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src={UmbraImage} />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card> */}


//             <Row gutter={16}>
//       <Col span={8}>
//       <Card
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src={UmbraImage} />}
//   >
//     <Meta title={raid.nameOfFight} description={raid.description} />
//   </Card>
//       </Col>
//       {/* <Col span={8}>
//       <Card
//     hoverable
//     // style={{ width: 240 }}
//     cover={<img alt="example" src={LitanyImage} />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
//       </Col>
//       <Col span={8}>
//       <Card
//     hoverable
//     // style={{ width: 240 }}
//     cover={<img alt="example" src={AnamorphosisImage} />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
//       </Col>
//     </Row>
//     <br />

//     <Row gutter={16}>
//       <Col span={8}>
//       <Card
//     hoverable
//     // style={{ width: 240 }}
//     cover={<img alt="example" src={UmbraImage} />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
//       </Col>
//       <Col span={8}>
//       <Card
//     hoverable
//     // style={{ width: 240 }}
//     cover={<img alt="example" src={LitanyImage} />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
//       </Col>
//       <Col span={8}>
//       <Card
//     hoverable
//     // style={{ width: 240 }}
//     cover={<img alt="example" src={AnamorphosisImage} />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
//       </Col> */}
//     </Row>
//     </tr>
//                         )
//                     })}
//     </tbody>
//             </table>
            
//         </div>
//     )
// }

// export default Raids;
