import React, {Component} from 'react';
import styled from 'styled-components';
import ShadowCleaveDrawing from '../../../assets/Litany/shadowCleaveOne.png';
import HikaruVGOne from '../../../assets/Litany/HikaruVGOne.png';
import HikaruVGTwo from '../../../assets/Litany/HikaruVGTwo.png';
import HikaruVGThree from '../../../assets/Litany/HikaruVGThree.png';
import HikaruVGFour from '../../../assets/Litany/HikaruVGFour.png';
import HikaruVGFive from '../../../assets/Litany/HikaruVGFive.png';
import HikaruVGSix from '../../../assets/Litany/HikaruVGSix.png';



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
const InfoBox = styled.div `
// background-color: black;
// opacity: 40%;
display: inline;
width: 500px;
height: 300px;
margin-left: 2.5%;
`
const Description = styled.h3 `
color: black;
z-index:1000;
`

const Image = styled.div `
margin-left: 15%;
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



export default class LitanyGuide extends Component<AcceptedProps> {
    constructor(props: AcceptedProps){
        super(props);
    }


    render() {
        return (
            <BackgroundBox>
                    <GuideTitle>Litany - E10S Savage Guide</GuideTitle>

                    <VideoWrapper>
                    <iframe width="1060" height="615" src="https://www.youtube.com/embed/ASKkL7oNMcs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    </VideoWrapper>

                    <br></br>
                    <br></br>
                    <h1>Shadow Cleave</h1>
                        <Image><img src={ShadowCleaveDrawing} width="800" height="500"/></Image>
                    <InfoBox>
                        <Description>
                            <a href="https://aliceheuz.github.io/e10s/">Training Game</a>

                        </Description>
                    </InfoBox>

                
                    <h1>Shadow Servant / Dualspell</h1>
                    
                    <InfoBox>
                        <Description>

                        </Description>
                    </InfoBox>
                    <br></br>
                    <h1>Pitch Bog 2 / Voidfate Amplifier</h1>

                    <VideoWrapper>
                    <iframe width="1060" height="615" src="https://www.youtube.com/embed/4XWL-xtSmwg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    </VideoWrapper>
                    <InfoBox>
                        <Description>
                            <h3>Additional guides:</h3>
                            <a href="https://ff14.toolboxgaming.space/?id=266322715728061&preview=1">JP Towers</a>
                        </Description>
                    </InfoBox>
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