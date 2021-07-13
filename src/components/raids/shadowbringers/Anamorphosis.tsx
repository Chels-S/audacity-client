import React, {Component} from 'react';
import styled from 'styled-components';




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
const SectionBox = styled.div `
display: flex;

`
const HikaruImages = styled.div `
display: flex;
flex-wrap: wrap;
margin-left: 3%;
`

type AcceptedProps = {
    fetchRaids: () => void

}



export default class AnamorphosisGuide extends Component<AcceptedProps> {
    constructor(props: AcceptedProps){
        super(props);
    }


    render() {
        return (
            <BackgroundBox>
                     <GuideTitle>Anamorphosis- E11S Savage Guide</GuideTitle>

                    <VideoWrapper>
                        <iframe width="1060" height="615" src="https://www.youtube.com/embed/brDenH2TANQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    </VideoWrapper>

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