import React, {Component}from 'react';
import { Card, Col, Row, Modal, Button, Form, Input  } from 'antd';
import APIURL from '../../helpers/Environment';
import Layout from 'antd/lib/layout/layout';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};


type AcceptedProps = {
    fetchTrials: ()=> void
}

type CreateState = {
    expansion: string,
    nameOfFight: string,
    bossName: string,
    description: string,
    videoLink: string,
    loading: boolean,
    visible: boolean
}

export default class CreateGuide extends Component <AcceptedProps, CreateState>{
    constructor(props: AcceptedProps){
        super(props)
        this.state={
            expansion: '',
            nameOfFight: '',
            bossName: '',
            description: '',
            videoLink: '',
            loading: false,
            visible: false
        }
        this.createGuide = this.createGuide.bind(this)
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


    createGuide(event: any){
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


    render(){
        const {visible, loading} = this.state;
        return(
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Create
                </Button>
                <Modal
                visible= {visible}
                title= "Create"
                onOk={this.createGuide}
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
                        {/* <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item> */}
                    </Form>


                </Modal>
            </div>
        )
    }


}

// import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
// import { DownOutlined, UserOutlined } from '@ant-design/icons';

// function handleButtonClick(e) {
//   message.info('Click on left button.');
//   console.log('click left button', e);
// }

// function handleMenuClick(e) {
//   message.info('Click on menu item.');
//   console.log('click', e);
// }

// const menu = (
//   <Menu onClick={handleMenuClick}>
//     <Menu.Item key="1" icon={<UserOutlined />}>
//       1st menu item
//     </Menu.Item>
//     <Menu.Item key="2" icon={<UserOutlined />}>
//       2nd menu item
//     </Menu.Item>
//     <Menu.Item key="3" icon={<UserOutlined />}>
//       3rd menu item
//     </Menu.Item>
//   </Menu>
// );

// ReactDOM.render(
//   <Space wrap>
//     <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
//       Dropdown
//     </Dropdown.Button>
//     <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
//       Dropdown
//     </Dropdown.Button>
//     <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
//       Dropdown
//     </Dropdown.Button>
//     <Dropdown.Button
//       overlay={menu}
//       buttonsRender={([leftButton, rightButton]) => [
//         <Tooltip title="tooltip" key="leftButton">
//           {leftButton}
//         </Tooltip>,
//         React.cloneElement(rightButton, { loading: true }),
//       ]}
//     >
//       With Tooltip
//     </Dropdown.Button>
//     <Dropdown overlay={menu}>
//       <Button>
//         Button <DownOutlined />
//       </Button>
//     </Dropdown>
//   </Space>,
//   mountNode,
// );

// import { Table, Tag, Space } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//       <>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

// ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);