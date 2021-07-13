import React, {Component} from 'react';
import styled from 'styled-components';
import ElementalCombos from '../../../assets/Eternity/ElementalCombos.png';
import Titan from '../../../assets/Eternity/Titan.png';
import BasicRel from '../../../assets/Eternity/BasicRel.png';
import HikaruBasicOne from '../../../assets/Eternity/HikaruBasicOne.jpg';
import HikaruBasicTwo from '../../../assets/Eternity/HikaruBasicTwo.jpg';
import HikaruBasicThree from '../../../assets/Eternity/HikaruBasicThree.jpg';
import IntermediateRelativity from '../../../assets/Eternity/IntermediateRelativity.png';
import AdvancedRelativity from '../../../assets/Eternity/AdvancedRelativity.png';


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
const SectionTitle = styled.h1 `
margin-bottom: 2%;
`
const SectionBox = styled.div `
display: flex;

`
const InfoLeft = styled.div `

`
const InfoRight = styled.div `

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
const PrimalImage = styled.div `
margin-left: 15%;
`
const BasicImage = styled.div `
margin-left: 7%;
`
const HikaruImages = styled.div `
display: flex;
flex-wrap: wrap;
margin-left: 3%;
`
const IntermediateImage = styled.div `
margin-left: 5%;
`
const AdvancedImage = styled.div `
margin-left: 5%;
`
const Border = styled.div `
height: 20px;
background-color: black;
opacity: 90%;
margin-top: 1%;
margin-bottom: 1%;
`
const VideoWrapper = styled.div `
display: flex;
justify-content: center;

`

type AcceptedProps = {
    fetchRaids: () => void

}



export default class EternityGuide extends Component<AcceptedProps> {
    constructor(props: AcceptedProps){
        super(props);
    }


    render() {
        return (
            <BackgroundBox>
                <GuideTitle>Eternity - E12S Savage Guide</GuideTitle>

                <VideoWrapper>
                <iframe width="1060" height="515" src="https://www.youtube.com/embed/wyWpOHeoCPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </VideoWrapper>

                {/* <h1>Part One: </h1> */}

          <br></br>
                <SectionBox>
                <PrimalImage><img src={ElementalCombos}  height= "700" width= "700"/></PrimalImage>
                <InfoBox>
                    <Description>
                        <h1>Primal Combos</h1>
                        Eternity will tether to and pull elements from two random primals.
                        <br></br>
                        <br></br>
                        These are arranged in various combos, as shown, with the dark areas being safe, and are cast in two separate ways:
                        <br></br>
                        <br></br>
                        CAST: These are immediate and she will execute them at the end of her cast bar.
                        <br></br>
                        <br></br>
                        STOCK: These are stored away for use later. These will be executed upon the end of the Release cast.
                        <br></br>
                        <br></br>
                        Once the cast bar is finished you are free to move. You do not need to wait for the visuals to catch up. You are snapshotted out of the aoes and therefore will not get hit.



                    </Description>
                </InfoBox>
                </SectionBox>
                    <br></br>
                <SectionBox>
                    <IntermediateImage>
                        <img src={Titan} height="450"/>
                    </IntermediateImage>
                    <InfoBox>
                    <Description>
                        <h1>Titan Junction</h1>
        
                        Referred to a Titan Junction or simply Titan, this phase immediately follows Shiva Junction / Icicles.
                        <br></br>
                        <br></br>
                        During this time, each player will randomly be assigned a color symbol above their head.
                        <br></br>
                        <br></br>
                        Orange Diamond:  Stack.
                        <br></br>
                        Yellow Pyramid: Small Aoe.
                        <br></br>
                        Blue Pyramid: Large Aoe
                        <br></br>
                        <br></br>
                        DPS primarily stays East while Tanks/Healers stay West.
                        <br></br>
                        <br></br>
                        The phases are read left to right. 
                        <br></br>
                        First Phase: 1 Blue / 3 Yellow / 4 Orange
                        <br></br>
                        Second Phase: 2 Blue / 0 Yellow / 6 Orange 
                        <br></br>
                        Third Phase: 2 Blue / 2 Yellow / 3 Orange

                
                    </Description>
                </InfoBox>
                </SectionBox>

                <SectionTitle>Lions</SectionTitle>
                <VideoWrapper>
                <iframe width="1060" height="515" src="https://www.youtube.com/embed/VDsheahgyIQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </VideoWrapper>

                <Border></Border>


                <VideoWrapper>
                <iframe width="1060" height="515" src="https://www.youtube.com/embed/eBdHx53XteI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </VideoWrapper>
                {/* <h1>Part Two:</h1> */}
                <br></br>

                <SectionBox>
                        <HikaruImages><img src={HikaruBasicOne} height="500" width="500"/></HikaruImages>
                        <InfoBox>
                    <Description>
                        <h1>Basic Relativity</h1>
                        <h3>Primary DPS Mechanic</h3>
                        Once this mechanic starts there will be one yellow stoplight around the arena. This stoplight becomes the new North position and the Tanks and Healers will immediately go to it.
                        <br></br>
                        <br></br>
                        DPS look at your debuffs for either a Fire or Ice debuff and the duration. (Purple/Hammer = Fire, Light Blue/Ice = Ice)
                        <br></br>
                        <br></br>
                        Shorter timer = Short Fire / Ice (~15 sec)
                        <br></br>
                        Longer timer = Late Fire / Ice (~30 sec)
                        <br></br>
                        <br></br>
                        Ice - Always bait these East + West, regardless of timer. 
                        <br></br>
                        <br></br>
                        Fire - Short Fire will move SE or SW as shown. Late Fire can stay with the party.
                        <br></br>
                        <br></br>

                        
                        </Description>
                </InfoBox>
                        <HikaruImages><img src={HikaruBasicTwo} height="500" width="500"/></HikaruImages>
                        <InfoBox>
                    <Description>
                    Once first debuffs resolve, DPS return to the party.
                    <br></br>
                    <br></br>
                    LATE FIRE can stay here with the party while the first debuffs resolve.
                        <br></br>
                        </Description>
                </InfoBox>

                </SectionBox>
                <br></br>
                <br></br>

                <SectionBox>

                        <HikaruImages><img src={HikaruBasicThree} height="500" width="500"/></HikaruImages>
                        <InfoBox>
                    <Description>
                        Everyone except tanks and DPS with Late Fire will stack directly south outside of the large aoe that spawns after second return drops.
                        <br></br>
                        <br></br>
                        LATE FIRE: Head East or West away from the party!
                        <br></br>
                        </Description>
                </InfoBox>
                </SectionBox>


                <br></br>
                <SectionBox>
                    <IntermediateImage>
                <img src={IntermediateRelativity}/>

                    </IntermediateImage>
                    <InfoBox>
                        <Description>
                            <h1>Intermediate Relativity</h1>
                            Three debuffs will be assigned. 
                            <br></br>
                            <br></br>
                            These must be resolved from RIGHT to LEFT. </Description>
                    </InfoBox>
                </SectionBox>



                <br></br>
                <SectionBox>
                    <AdvancedImage>
                <img src={AdvancedRelativity} />

                    </AdvancedImage>
                    <InfoBox>
                    <Description>
                        <h1>Advanced Relativity</h1>

                        Only 3 Debuffs matter in this section:
                        <br></br>
                        <br></br>

                        Hammer:
                        <br></br>
                        If you have a Hammer debuff, you'll follow the guide on the far left.
                        <br></br>
                        <br></br>
                        

                        Double Aero:
                        <br></br>
                        If you have TWO Aero debuffs, you'll follow the guide in the middle.
                        <br></br>
                        <br></br>

                        Gaze:
                        <br></br>
                        If you have Gaze, you'll follow the guide on the far right.
                    </Description>

                    </InfoBox>
                </SectionBox>

            </BackgroundBox>
        )
    }
}


// const Eternity = (props) => {
//     console.log(props);

//     return (
//         <div className= "eternityGuide">
//             <h1>The savage guide for Eternity - Gaia</h1>
//             {props.raids.map((raid, index)=>{
//                         return( 
//                             <tr key={index}>
//                                 <th scope="row">{raid.id}</th>
//                                 <th>{raid.expansion}</th>
//                                 <th>{raid.nameOfFight}</th>
//                                 <th>{raid.bossName}</th>
//                                 <th>{raid.description}</th>
//                                 <th>{raid.videoLink}</th>
//                             </tr>
//                         )
//                     })}
//         </div>
       
//     )
// }


// export default Eternity;