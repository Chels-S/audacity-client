import React, { Component} from 'react';
import { Card, Col, Row, Modal, Button, Space } from 'antd';
import APIURL from '../../helpers/Environment';
import styled from 'styled-components';
import {Link, Route} from "react-router-dom";
import UmbraImage from '../../assets/umbraImage.png';

const CardWrapper = styled.div `
margin-left: 2%;
margin-right: 2%;
// width: 60%;
display: flex;
flex-wrap: wrap;

`


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
  ],
  trialEdit: {
    expansion: string,
    nameOfFight: string,
    bossName: string,
    description: string,
    videoLink: string
  },
  addTrial: {
    expansion: string,
    nameOfFight: string,
    bossName: string,
    description: string,
    videoLink: string
  },

  loading: boolean,
  visible: boolean
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
     ],
     trialEdit: {
      expansion: '',
      nameOfFight: '',
      bossName: '',
      description: '',
      videoLink: ''
    },
     addTrial: {
      expansion: '',
      nameOfFight: '',
      bossName: '',
      description: '',
      videoLink: ''
    },
    loading: false,
    visible: false,
    }
    this.fetchTrials = this.fetchTrials.bind(this)
    this.trialEdit = this.trialEdit.bind(this)
    this.addTrial = this.addTrial.bind(this)
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
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
      this.setState({allTrials: data})
      console.log(data);

  })
  .catch(error => console.log(error))
  }




  trialMapper = () => {
    return this.state.allTrials.map((trial, index) => {
      return( 

        <div  key={index}>
          <Space direction="horizontal">
        <Row gutter={16}>
      <Col span={8}>
      <Card 
    hoverable 
    style={{width: 600} }
    cover={<img alt="example" src={UmbraImage} />}
  >
          {/* <h3 >{trial.id}</h3> */}
          <h3>{trial.bossName}</h3>
          <h3>{trial.nameOfFight}</h3>
          <h3>{trial.expansion}</h3>
          <h3>{trial.description}</h3>
          <h3>{<Link to={`/trials/${trial.bossName}`}>View Guide</Link>}</h3>

  </Card>
      </Col>
      </Row>
            
          </Space>
        </div>
      )
    })
  }



  trialEdit(singleTrial: {
    expansion: string;
    nameOfFight: string;
    bossName: string;
    description: string;
    videoLink: string;
  }){
    this.setState(() => {return {trialEdit: singleTrial}})
    
  }

  addTrial(singleTrial: {
    expansion: string;
    nameOfFight: string;
    bossName: string;
    description: string;
    videoLink: string;
  }){
    this.setState(() => {return {addTrial: singleTrial}})
  }


  showModal() {
    this.setState({
      visible: true,
    })
  }

  handleOk(){
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({ loading: false, visible: false});
    }, 3000)
  }

  handleCancel(){
    this.setState({visible:false});
  };

  render(){
    const {visible, loading} = this.state;
    return(
      <div className="main">
        <div className="mainDiv">
          <h1>Trial Guides</h1>
          <CardWrapper>
            
          {this.trialMapper()}
          </CardWrapper>
          {/* <Button type="primary" onClick={this.showModal}>
           Edit
       </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
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

// import { Form, Input, InputNumber, Button } from 'antd';
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// /* eslint-disable no-template-curly-in-string */

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };
// /* eslint-enable no-template-curly-in-string */

// const Demo = () => {
//   const onFinish = (values) => {
//     console.log(values);
//   };

//   return (
//     <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//       <Form.Item
//         name={['user', 'name']}
//         label="Name"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name={['user', 'email']}
//         label="Email"
//         rules={[
//           {
//             type: 'email',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name={['user', 'age']}
//         label="Age"
//         rules={[
//           {
//             type: 'number',
//             min: 0,
//             max: 99,
//           },
//         ]}
//       >
//         <InputNumber />
//       </Form.Item>
//       <Form.Item name={['user', 'website']} label="Website">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'introduction']} label="Introduction">
//         <Input.TextArea />
//       </Form.Item>
//       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// ReactDOM.render(<Demo />, mountNode);