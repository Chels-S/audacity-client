import React, {Component}from 'react';
import { Card, Col, Row, Modal, Button, Form, Input, Table, Tag, Space  } from 'antd';
import {Link, Route} from "react-router-dom";
import APIURL from '../helpers/Environment';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};


const GuideColumns = [
    {
      title: 'Fight Name',
      dataIndex: 'nameOfFight',
      key: 'nameOfFight',
    },
    {
        title: 'Boss Name',
        dataIndex: 'bossName',
        key: 'bossName',
    },
    {
      title: 'Expansion',
      dataIndex: 'expansion',
      key: 'expansion',
    //   render: text => <a>{text}</a>,
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    //   render: tags => (
    //     <>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    },
    {
        title: 'Video Link',
        dataIndex: 'videoLink',
        key: 'videoLink',
        },
        {
          title: 'Action',
          key: 'action',
        //   render: (text, record) => (
        //     <Space size="middle">
        //       <a>Invite {record.name}</a>
        //       <a>Delete</a>
        //     </Space>
        //   ),
        },
  ];
const UserColumns = [
    {
      title: 'Character Name',
      dataIndex: 'characterName',
      key: 'characterName',
    //   render: text => <a>{text}</a>,
    },
    {
      title: 'Username',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    },
  ];

//   const GuideData = [
//     {
//       expansion: 'Shadowbringers',
//       nameOfFight: 'Litany',
//       bossName: "Shadowkeeper",
//       description: 'shadow doggo',
//       videoLink: 'link'
//     },
//   ];
  const UserData = [
    {
      characterName: 'Mira',
      userName: 'Mira',
      role: 'Admin'
      
    },
  ];
  


type AcceptedProps = {
    fetchTrials: () => any
    fetchRaids: () => void
    trialMapper: () => any
}

type GuideState = {
    id: number
    expansion: string,
    nameOfFight: string,
    bossName: string,
    description: string,
    videoLink: string,
    loading: boolean,
    visible: boolean,
    title: string,
    dataIndex: string,
    key: string,
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

export default class CreateGuide extends Component <AcceptedProps, GuideState>{
    constructor(props: AcceptedProps){
        super(props)
        this.state={
            id: 0,
            expansion: '',
            nameOfFight: '',
            bossName: '',
            description: '',
            videoLink: '',
            loading: false,
            visible: false,
            title: '',
            dataIndex: '',
            key: '',
            allRaids: [{
                id: 0,
                expansion: '',
                nameOfFight: '',
                bossName: '',
                description: '',
                videoLink: ''
        
              }]
            
        }
        this.createTrial = this.createTrial.bind(this)
        this.createRaid = this.createRaid.bind(this)
        // this.raidData = this.raidData.bind(this)
        this.editTrial = this.editTrial.bind(this)
        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)


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


    createTrial(event: any){
        event.preventDefault()
        fetch(`${APIURL}/trials/create`, {
            method: 'POST',
            body: JSON.stringify({
                expansion: this.state.expansion,
                nameOfFight: this.state.nameOfFight,
                bossName: this.state.nameOfFight,
                description: this.state.description,
                videoLink: this.state.videoLink
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
        .then(this.props.fetchTrials)
        setTimeout(() => {
            this.setState({ loading: false, visible: false});
          }, 3000)

    }
    createRaid(event: any){
        event.preventDefault()
        fetch(`${APIURL}/raids/create`, {
            method: 'POST',
            body: JSON.stringify({
                expansion: this.state.expansion,
                nameOfFight: this.state.nameOfFight,
                bossName: this.state.nameOfFight,
                description: this.state.description,
                videoLink: this.state.videoLink
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
        .then(this.props.fetchRaids)
        setTimeout(() => {
            this.setState({ loading: false, visible: false});
          }, 3000)

    }



    editTrial(event: any){
        event.preventDefault()
        fetch(`${APIURL}/trials/edit/${this.state.id}`, {
            method: 'POST',
            body: JSON.stringify({
                expansion: this.state.expansion,
                nameOfFight: this.state.nameOfFight,
                bossName: this.state.nameOfFight,
                description: this.state.description,
                videoLink: this.state.videoLink
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
        .then(this.props.fetchTrials)
        setTimeout(() => {
            this.setState({ loading: false, visible: false});
          }, 3000)

    }

    
    // raidData(){
    //     this.props.fetchRaids
    // }

    



    render(){
        const {visible, loading} = this.state;
        

        const GuideData = [
            {
              expansion: 'Shadowbringers',
              nameOfFight: 'Litany',
              bossName: "Shadowkeeper",
              description: 'shadow doggo',
              videoLink: 'link'
            },
          ];



        return(
            <div>
              {this.props.fetchTrials}
                <Button type="primary" onClick={this.showModal}>
                    Create Raid
                </Button>
                <Modal
                visible= {visible}
                title= "Create"
                onOk={this.createRaid}
                onCancel={this.handleCancel}
                >
                    <Form >
                        <Form.Item 
                        name={['expansion']}
                        label="Expansion"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.expansion} placeholder="Expansion" onChange={(event) => this.setState({expansion: event.target.value})} />
                        </Form.Item>
                        <Form.Item 
                        name={['nameOfFight']}
                        label="Fight Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.nameOfFight} placeholder="Fight Name" onChange={(event) => this.setState({nameOfFight: event.target.value})}/>
                        </Form.Item>
                        <Form.Item 
                        name={['bossName']}
                        label="Boss Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.bossName} placeholder="Boss Name" onChange={(event) => this.setState({bossName: event.target.value})}/>
                        </Form.Item>
                        <Form.Item name={['description']} label="Description" rules={[{required:true}]}>
                            
                            <Input.TextArea value={this.state.description} placeholder="Description" onChange={(event) => this.setState({description: event.target.value})}/>
                        </Form.Item>
                        <Form.Item 
                        name={['videoLink']}
                        label="Video Link"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.videoLink} placeholder="Video Link" onChange={(event) => this.setState({videoLink: event.target.value})}/>
                        </Form.Item>
                    </Form>
                </Modal>



                <Button type="primary" onClick={this.showModal}>
                    Create Trial
                </Button>
                <Modal
                visible= {visible}
                title= "Create"
                onOk={this.createTrial}
                onCancel={this.handleCancel}
                >
                    <Form >
                        <Form.Item 
                        name={['expansion']}
                        label="Expansion"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.expansion} placeholder="Expansion" onChange={(event) => this.setState({expansion: event.target.value})} />
                        </Form.Item>
                        <Form.Item 
                        name={['nameOfFight']}
                        label="Fight Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.nameOfFight} placeholder="Fight Name" onChange={(event) => this.setState({nameOfFight: event.target.value})}/>
                        </Form.Item>
                        <Form.Item 
                        name={['bossName']}
                        label="Boss Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.bossName} placeholder="Boss Name" onChange={(event) => this.setState({bossName: event.target.value})}/>
                        </Form.Item>
                        <Form.Item name={['description']} label="Description" rules={[{required:true}]}>
                            
                            <Input.TextArea value={this.state.description} placeholder="Description" onChange={(event) => this.setState({description: event.target.value})}/>
                        </Form.Item>
                        <Form.Item 
                        name={['videoLink']}
                        label="Video Link"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.videoLink} placeholder="Video Link" onChange={(event) => this.setState({videoLink: event.target.value})}/>
                        </Form.Item>
                    </Form>
                </Modal>


{/* 
                <Button type="primary" onClick={this.showModal}>
                    Edit
                </Button>
                <Modal
                visible= {visible}
                title= "Create"
                onOk={this.editTrial}
                onCancel={this.handleCancel}
                >
                    <Form >

                        <Form.Item 
                        name={['expansion']}
                        label="Expansion"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.expansion} placeholder="Expansion" onChange={(event) => this.setState({expansion: event.target.value})} />
                        </Form.Item>
                        <Form.Item 
                        name={['nameOfFight']}
                        label="Fight Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.nameOfFight} placeholder="Fight Name" onChange={(event) => this.setState({nameOfFight: event.target.value})}/>
                        </Form.Item>
                        <Form.Item 
                        name={['bossName']}
                        label="Boss Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.bossName} placeholder="Boss Name" onChange={(event) => this.setState({bossName: event.target.value})}/>
                        </Form.Item>
                        <Form.Item name={['description']} label="Description" rules={[{required:true}]}>
                            
                            <Input.TextArea value={this.state.description} placeholder="Description" onChange={(event) => this.setState({description: event.target.value})}/>
                        </Form.Item>
                        <Form.Item 
                        name={['videoLink']}
                        label="Video Link"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        >
                            <Input type="text" value={this.state.videoLink} placeholder="Video Link" onChange={(event) => this.setState({videoLink: event.target.value})}/>
                        </Form.Item>
                    </Form>


                </Modal> */}


<Table columns={GuideColumns} dataSource={GuideData}/>;
<Table columns={UserColumns} dataSource={UserData}/>;
            </div>
        )
    }


}