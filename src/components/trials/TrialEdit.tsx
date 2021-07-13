import React, {Component} from 'react';
import { Card, Col, Row, Modal, Button, Form, Input, Table, Tag, Space  } from 'antd';
import APIURL from '../../helpers/Environment';

type AcceptedProps = {
    fetchTrials: () => void
}

type TrialState = {
    id: number
    expansion: string,
    nameOfFight: string,
    bossName: string,
    description: string,
    videoLink: string,
    loading: boolean,
    visible: boolean,

    allTrials: [{
        
        id: number,
        expansion: string,
        nameOfFight: string,
        bossName: string,
        description: string,
        videoLink: string
      }],
}

export default class TrialEdit extends Component<AcceptedProps, TrialState> {
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
            allTrials: [{
                id: 0,
                expansion: '',
                nameOfFight: '',
                bossName: '',
                description: '',
                videoLink: ''
          }],
        }
        this.editTrial = this.editTrial.bind(this)

    }

    handleCancel(){
        this.setState({visible:false});
      };

    showModal() {
        this.setState({
          visible: true,
        })
      }


    editTrial(trial:any){
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


    render(){
        const {visible, loading} = this.state;
        return(
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Edit Trial
                </Button>
                <Modal 
                visible = {visible}
                    title= "Edit Trial"
                    onOk={this.editTrial}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <Form.Item
                            name={['expansion']}
                            label="Expansion"
                        >
                            <Input type="text" value={this.state.expansion} placeholder="Expansion" onChange={(event) => this.setState({expansion: event.target.value})} />

                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }

}