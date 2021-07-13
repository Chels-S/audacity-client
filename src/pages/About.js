import React, {Component} from 'react';
import styled from 'styled-components';
import AudacGroup from '../assets/audacGroup.png';


const BackgroundBox = styled.div `
background-color: pink;

`
const AboutTitle = styled.h1 `
display: flex;
justify-content: center;
color: red;
padding-top: 1.5%;
padding-bottom: 1.5%;
`

const AudacImageWrapper = styled.div `

`

const About = () => {
    return (
        <BackgroundBox className="about">
            <AboutTitle>Welcome to collection of raid guides for Audacity!</AboutTitle>

            <AudacImageWrapper>

            <img src={AudacGroup}></img>
            </AudacImageWrapper>
                  
     
        </BackgroundBox>






       
    )
}


export default About;