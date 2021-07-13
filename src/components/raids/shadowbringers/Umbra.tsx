import React, {Component} from 'react';
import styled from 'styled-components';
import UmbraCleaves from '../../../assets/Umbra/UmbraCleaves.jpg';



const BackgroundBox = styled.div `
background-color: pink;
`

const GuideTitle = styled.h1 `
display: flex;
justify-content: center;
color: red;
padding-top: 1.5%;
padding-bottom: 1.5%;
`

const VideoWrapper = styled.div `
display: flex;
justify-content: center;

`


type AcceptedProps = {
    fetchRaids: () => void

}



export default class UmbraGuide extends Component<AcceptedProps> {
    constructor(props: AcceptedProps){
        super(props);
    }


    render() {
        return (
            <BackgroundBox>
                <GuideTitle>Umbra - E9S Savage Guide</GuideTitle>

            <VideoWrapper>
            <iframe width="1060" height="615" src="https://www.youtube.com/embed/B_6hU9-4q_0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </VideoWrapper>
                
                <h1>Cleaves</h1>
                <img src={UmbraCleaves} />



                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
            </BackgroundBox>
        )
    }
}