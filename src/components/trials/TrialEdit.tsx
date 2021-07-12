import React, {Component} from 'react';

// type AcceptedProps ={
//     guideEdit: {
//         expansion: string,
//         nameOfFight: string,
//         bossName: string,
//         description: string,
//         videoLink: string
//     }
// }

// type GuideEditState = {
//     expansion: string,
//     nameOfFight: string,
//     bossName: string,
//     description: string,
//     videoLink: string
// }

// export default class GuideEdit extends Component <AcceptedProps, GuideEditState>{
//     constructor(props: AcceptedProps){
//         super(props)
//         this.state={
//             expansion: props.trialEdit.expansion,
//             nameOfFight: props.trialEdit.nameOfFight,
//             bossName: props.trialEdit.bossName,
//             description: props.trialEdit.description,
//             videoLink: props.trialEdit.videoLink
//         }
//     }
// }

// import { Modal, Button } from 'antd';

// class App extends React.Component {
//   state = {
//     loading: false,
//     visible: false,
//   };

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = () => {
//     this.setState({ loading: true });
//     setTimeout(() => {
//       this.setState({ loading: false, visible: false });
//     }, 3000);
//   };

//   handleCancel = () => {
//     this.setState({ visible: false });
//   };

//   render() {
//     const { visible, loading } = this.state;
//     return (
//       <>
//         <Button type="primary" onClick={this.showModal}>
//           Open Modal with customized footer
//         </Button>
//         <Modal
//           visible={visible}
//           title="Title"
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//           footer={[
//             <Button key="back" onClick={this.handleCancel}>
//               Return
//             </Button>,
//             <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
//               Submit
//             </Button>,
//             <Button
//               key="link"
//               href="https://google.com"
//               type="primary"
//               loading={loading}
//               onClick={this.handleOk}
//             >
//               Search on Google
//             </Button>,
//           ]}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Modal>
//       </>
//     );
//   }
// }

// ReactDOM.render(<App />, mountNode);

// import React, { useState } from 'react';
// import { Modal, Button } from 'antd';

// const App = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };

// ReactDOM.render(<App />, mountNode);8
// import { Space, Card } from 'antd';

// function SpaceVertical() {
//   return (
//     <Space direction="vertical">
//       <Card title="Card" style={{ width: 300 }}>
//         <p>Card content</p>
//         <p>Card content</p>
//       </Card>
//       <Card title="Card" style={{ width: 300 }}>
//         <p>Card content</p>
//         <p>Card content</p>
//       </Card>
//     </Space>
//   );
// }

// ReactDOM.render(<SpaceVertical />, mountNode);