import React, {Component}from 'react';
import { Modal, Button, Form, Input, Table } from 'antd';
import APIURL from '../helpers/Environment';
import TrialEdit from '../components/trials/TrialEdit';
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
          title: 'Action',
          key: 'action',
        },
  ];
const UserColumns = [
    {
      title: 'Action',
      key: 'action',
    },
  ];



type AcceptedProps = {
    fetchTrials: () => void
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
    index: number,
    key: string,
    allRaids: [{
        id: number,
        expansion: string,
        nameOfFight: string,
        bossName: string,
        description: string,
        videoLink: string
  
      }],
    allTrials: [{
          id: number,
          expansion: string,
          nameOfFight: string,
          bossName: string,
          description: string,
          videoLink: string
        }],
    allUsers: [{
            id: number,
            characterName: string,
            username: string,
            role: string
        }]
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
            index: 0,
            key: '',
            allRaids: [{
                id: 0,
                expansion: '',
                nameOfFight: '',
                bossName: '',
                description: '',
                videoLink: ''
        
            }],
            allTrials: [{
                  id: 0,
                  expansion: '',
                  nameOfFight: '',
                  bossName: '',
                  description: '',
                  videoLink: ''
            }],
            allUsers: [{
                    id: 0,
                    characterName: '',
                    username: '',
                    role: ''
            }]
            
        }
        this.fetchTrials = this.fetchTrials.bind(this)
        this.fetchRaids = this.fetchRaids.bind(this)
        this.fetchUsers = this.fetchUsers.bind(this)
        this.createTrial = this.createTrial.bind(this)
        this.createRaid = this.createRaid.bind(this)
        this.editTrial = this.editTrial.bind(this)
        this.editRaid = this.editRaid.bind(this)
        this.editUser = this.editUser.bind(this)
        this.deleteTrial = this.deleteTrial.bind(this)
        this.deleteRaid = this.deleteRaid.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)


    }

    componentDidMount(){
        this.fetchTrials()
        this.fetchRaids()
        this.fetchUsers()
    }
    
//! FETCHES

// ! Fetch Trials
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
        //   for (let i=0;  i < this.state.id; i++){
        //       this.setState({
        //           id: data[i].id
        //         })
        //         console.log(data[i].id);
        //     }
          this.setState({
              allTrials: data,
        })
          console.log(data);
;    
      })
      .catch(error => console.log(error))
      }
//! Fetch Raids
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
          })
          console.log(data);
          console.log(data[2].expansion);
    
      })
      .catch(error => console.log(error))
      }

      fetchUsers = () => {
          fetch(`${APIURL}/user`,{
              method: "GET",
              headers: new Headers({
                  'Content-Type': 'application/json',
                  'Authorization': localStorage.token
              })
          })
          .then((res) => (res.json()))
          .then((data) => {
                this.setState({
                    allUsers: data
                })
                console.log(data);
          })
          .catch(error => console.log(error))
      }

//! MAPPERS
      trialMapper = () => {
        return this.state.allTrials.map((trial, index) => {
          return( 
    
            <div >

                <tr>
                    <th>ID</th>
                    <th>Fight Name</th>
                    <th>Boss Name</th>
                    <th>Expansion</th>
                    <th>Description</th>
                </tr>
            <tr key={index}>
              <th scope="row">{trial.id}</th>
              <td>{trial.nameOfFight}</td>
              <td>{trial.bossName}</td>
              <td>{trial.expansion}</td>
              <td>{trial.description}</td>
              {/* <h3>{<Link to={`/trials/${trial.bossName}`}>View Guide</Link>}</h3> */}
              <td>
                  <Button type="primary" onClick={() => this.editTrial(trial.id)}>Edit</Button>
                  {/* <Button type="primary" onClick={this.showModal}>Edit</Button>
                  <Modal title="Edit" onOk={() => this.editTrial(trial.id)} onCancel={this.handleCancel}>
                      <Form>
                          <Form.Item
                          name={['bossName']}
                          label={['Boss Name']}
                          >
                            <Input type='text' value={this.state.bossName} placeholder="Boss Name" onChange={(event) => this.setState({bossName: event.target.value})}/>  
                          </Form.Item>
                      
                      </Form>
                      </Modal> */}
              </td>
              <td>
                  <Button color="warning" onClick={() => this.deleteTrial(trial.id)}>Delete</Button>
              </td>
    
   
            </tr>
                </div>
          )
        })
      }



      raidMapper = () => {
        return this.state.allRaids.map((raid, index) => {
          return( 
    
            <div >

                <tr>
                    <th>ID</th>
                    <th>Fight Name</th>
                    <th>Boss Name</th>
                    <th>Expansion</th>
                    <th>Description</th>
                </tr>
            <tr key={index}>
              <th scope="row">{raid.id}</th>
              <td>{raid.nameOfFight}</td>
              <td>{raid.bossName}</td>
              <td>{raid.expansion}</td>
              <td>{raid.description}</td>
              <td>
              <Button type="primary" onClick={() => this.editRaid(raid.id)}>Edit</Button>
              </td>
              <td>
                  <Button color="warning" onClick={() => this.deleteRaid(raid.id)}>Delete</Button>
              </td>
    
   
            </tr>
                </div>
          )
        })
      }
      userMapper = () => {
        return this.state.allUsers.map((user, index) => {
          return( 
    
            <div >

                <tr>
                    <th>ID</th>
                    <th>Character Name</th>
                    <th>Username</th>
                    <th>Role</th>
                </tr>
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.characterName}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                  <Button type="primary" onClick={this.showModal}>Edit</Button>
                  <Modal title="Edit" onOk={this.editRaid} onCancel={this.handleCancel}>
                      <Form>
                          <Form.Item
                          name={['bossName']}
                          label={['Boss Name']}
                          >
                            <Input type='text' value={this.state.bossName} placeholder="Boss Name" onChange={(event) => this.setState({bossName: event.target.value})}/>  
                          </Form.Item>
                      
                      </Form>
                      </Modal>
              </td>
              <td>
                  <Button color="warning" onClick={() => this.deleteUser(user.id)}>Delete</Button>
              </td>
    
   
            </tr>
                </div>
          )
        })
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

//! CREATE

    createTrial(){
        // event.preventDefault()
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

//! EDITS

    editTrial(trial: any){
        // event.preventDefault()
        fetch(`${APIURL}/trials/edit/${trial}`, {
            method: 'PUT',
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
    editRaid(raid: any){
        // event.preventDefault()
        fetch(`${APIURL}/raids/edit/${raid}`, {
            method: 'PUT',
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
    editUser(event: any){
        // event.preventDefault()
        fetch(`${APIURL}/user/edit/${this.state.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                // role: this.state.role
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
        .then(this.fetchUsers)
        setTimeout(() => {
            this.setState({ loading: false, visible: false});
          }, 3000)

    }

    //! DELETES

    deleteTrial(trial: any){
        // event.preventDefault()
        fetch(`${APIURL}/trials/delete/${trial}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
        .then(this.fetchTrials)
        console.log(this.state.allTrials[this.state.id].id);
        setTimeout(() => {
            this.setState({ loading: false, visible: false});
          }, 3000)

    }
    deleteRaid(raid: any){
        // event.preventDefault()
        fetch(`${APIURL}/raids/delete/${raid}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
        .then(this.fetchRaids)
        setTimeout(() => {
            this.setState({ loading: false, visible: false});
          }, 3000)

    }
    deleteUser(user: any){
        // event.preventDefault()
        fetch(`${APIURL}/user/delete/${user}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
        .then(this.fetchUsers)
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
              expansion: "shadowbringers",
              nameOfFight: 'Litany',
              bossName: "Shadowkeeper",
              description: 'shadow doggo',
              videoLink: 'link'
            },
          ];



        return(
            <div>
              {/* {this.props.fetchTrials} */}
                <Button type="primary" onClick={this.showModal}>
                    Create Trial
                </Button>
                <Modal
                visible= {visible}
                title= "Create Trial"
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
                    </Form>
                </Modal>




                <Form>
               
                    <Form.Item 
                        name={['expansion']}
                        label="Expansion"
                        >
                            <Input type="text" value={this.state.expansion} placeholder="Expansion" onChange={(event) => this.setState({expansion: event.target.value})} />

                    </Form.Item>
                    <Form.Item 
                        name={['nameOfFight']}
                        label="Fight Name"
                        >
                            <Input type="text" value={this.state.nameOfFight} placeholder="Fight Name" onChange={(event) => this.setState({nameOfFight: event.target.value})} />
            
                    </Form.Item>
                    <Form.Item 
                        name={['bossName']}
                        label="Boss Name"
                        >
                            <Input type="text" value={this.state.bossName} placeholder="Boss Name" onChange={(event) => this.setState({bossName: event.target.value})} />
    
                    </Form.Item>
                    <Form.Item 
                        name={['description']}
                        label="Description"
                        >
                            <Input type="text" value={this.state.description} placeholder="Description" onChange={(event) => this.setState({description: event.target.value})} />
                    </Form.Item>
                </Form>


{/* 
                <Button type="primary" onClick={this.showModal}>
                    Edit
                </Button>
                <Modal
                visible= {visible}
                title= "Edit"
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


<Table columns={GuideColumns} dataSource={this.trialMapper()}/>;

<Button type="primary" onClick={this.showModal}>
                    Create Raid
                </Button>
                <Modal
                visible= {visible}
                title= "Create Raid"
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
                    </Form>
                </Modal>

                <Form>
               
               <Form.Item 
                   name={['expansion']}
                   label="Expansion"
                   >
                       <Input type="text" value={this.state.expansion} placeholder="Expansion" onChange={(event) => this.setState({expansion: event.target.value})} />

               </Form.Item>
               <Form.Item 
                   name={['nameOfFight']}
                   label="Fight Name"
                   >
                       <Input type="text" value={this.state.nameOfFight} placeholder="Fight Name" onChange={(event) => this.setState({nameOfFight: event.target.value})} />
       
               </Form.Item>
               <Form.Item 
                   name={['bossName']}
                   label="Boss Name"
                   >
                       <Input type="text" value={this.state.bossName} placeholder="Boss Name" onChange={(event) => this.setState({bossName: event.target.value})} />

               </Form.Item>
               <Form.Item 
                   name={['description']}
                   label="Description"
                   >
                       <Input type="text" value={this.state.description} placeholder="Description" onChange={(event) => this.setState({description: event.target.value})} />
               </Form.Item>
           </Form>


<Table columns={GuideColumns} dataSource={this.raidMapper()}/>;


<Table columns={UserColumns} dataSource={this.userMapper()}/>;
            </div>
        )
    }


}