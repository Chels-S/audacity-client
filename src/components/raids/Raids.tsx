import React, {useState, useEffect, Component} from 'react';
import { Card, Col, Row,  } from 'antd';
import APIURL from '../../helpers/Environment';
import styled from 'styled-components';
import {Link, Route} from "react-router-dom";
import UmbraImage from '../../assets/umbraImage.png';
// import LitanyImage from '../../assets/litanyImage.png';
// import AnamorphosisImage from '../../assets/anamorphosisImage.png';
// import Eternity from './shadowbringers/Eternity';
// import Anamorphosis from './shadowbringers/Anamorphosis';

const { Meta } = Card;
const CardWrapper = styled.div `
margin-left: 2%;
margin-right: 2%;
// width: 60%;
display: flex;
flex-wrap: wrap;

`

type AcceptedProps = {

}

type RaidState = {
    allRaids: [{
      id: number,
      expansion: string,
      nameOfFight: string,
      bossName: string,
      description: string,
      videoLink: string

    }

    ]
   
}


export default class RaidGuides extends Component <AcceptedProps, RaidState> {
  constructor(props: AcceptedProps){
    super(props);
    this.state={
      allRaids: [{
        id: 0,
        expansion: '',
        nameOfFight: '',
        bossName: '',
        description: '',
        videoLink: ''

      }]
     
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
          allRaids: data

        // expansion: data[2].expansion,
        // nameOfFight: data[2].nameOfFight,
        // bossName: data[2].bossName,
        // description: data[2].description,
        // videoLink: data[2].videoLink
      })
      console.log(data);
      console.log(data[2].expansion);

  })
  .catch(error => console.log(error))
  }

  raidMapper = () => {
    return this.state.allRaids.map((raid, index) => {
      return( 

        <div key={index}>

        <Row gutter={16}>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 600 }}
    cover={<img alt="example" src={raid.videoLink} />}
  >
          {/* <h3 >{raid.id}</h3> */}
          <h3>{raid.expansion}</h3>
          <h3>{raid.nameOfFight}</h3>
          <h3>{raid.bossName}</h3>
          <h3>{raid.description}</h3>
          <h3>{<Link to={`/raids/${raid.nameOfFight}`}>View Guide</Link>}</h3>

  </Card>
      </Col>
      </Row>
        </div>
      )
    })
  }


  render(){
    return(
      <div className="main">
        <div className="mainDiv">
          <h1>Raid Guides</h1>

          {/* <h1>{this.state.expansion}</h1> */}
          <CardWrapper>

          {this.raidMapper()}
          </CardWrapper>
          {/* <Row gutter={16}>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={UmbraImage} />} */}
  {/* > */}
    {/* <Meta title={this.raidMapper()} /> */}
   {/* <Meta title={this.state.expansion} description={this.state.description} /> */}
   {/* <h1>{this.state.bossName}</h1>
   <p>{this.state.nameOfFight}</p>
   <p>{this.state.videoLink}</p> */}
  {/* </Card>
      </Col>
      </Row> */}
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
