import React, {useState} from 'react';
import logoutGoob from '../assets/logoutGoob.png';
import styled, { keyframes } from 'styled-components';


const move = keyframes `
0%{
    opacity: 0;
}
95%{
    opacity: 1;
}
`;


const BackgroundBox = styled.div`
background-color: #beeefb;
height: 50vh;
width: 50%;

display: flex;
justify-content: center;
align-items: center;
margin: 15rem auto;

position: relative;
border-radius: 23px;
border: 1px solid #053271;


.registerTransfer {
    z-index: ${(props) => (props.clicked ? "-700" : "700")};
    transform: ${(props) => (props.clicked ? "translateX(0)" : "translateX(100%)" )};
    transition: transform 1s ease-in-out;
    animation: ${(props) => (props.clicked ? move : "none")} 1.5s;
}

.loginTransfer {
    z-index: ${(props) => (props.clicked ? "700" : "-700")};
    transform: ${(props) => (props.clicked ? "translateX(-100%)" : "translateX(0%)" )};
    transition: transform 1s ease-in-out;
    animation: ${(props) => (props.clicked ? "none" : move)} 1.5s;

}


.login{
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "-600": "500")};
    transform: ${(props) => (props.clicked ? "none" : "translateX(-60%)")};
    transition: all 1s;
}
.register{
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "500": "-500")};
    transform: ${(props) => (props.clicked ? "translateX(60%)" : "none")};
    transition: all 1s;
}
`;

const BoxOne = styled.div`
background-color: #f1fdcd;
width: 50%;
height: 100%;
position: absolute;
left: 0;
top: 0;

transform: ${(props) => props.clicked ? "translateX(90%)": "translateX(10%)"};
transition: transform 1s;

&::after,
&::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f1fdcd;

    z-index: -200%
}

&::before {
    top: 3rem;
    border-radius: 23px;
    border: 4px solid #053271;
}

&::after {
    bottom: 3rem;
    border-radius: 23px 23px 0 0;
    border-right: 4px solid #053271;
    border-left: 4px solid #053271;
}
`;

const BoxTwo = styled.div`
background-color: #053271;
width: 45%;
height: 100%;
position: absolute;
right: 0;
top: 0;

z-index: 600;
transform: ${(props) => props.clicked ? "translate(-122%)": "translateX(0%)"};
transition: transform 1s;


border-radius: ${props => props.clicked ? "23px 0 0 23px": "0 23px 23px 0"};


`;

const Form = styled.form`
color: #1b1b1b;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
padding: 0 4rem;
// z-index: 100;
`;

const Input = styled.input`
background-color: #fff;
border: none;
border-bottom: 2px solid #053271;


padding: 1rem 2rem;
margin: 0.5rem 0;
width: 100%;

&:focus {
    outline: none;
    border: none;
    border: 2px solid #053271;

}
`;

const Button = styled.button `
border-radius: 3px;
padding: 1rem 3.5rem;
margin-top: 1rem;
border: 1px solid black;
background-color: black;
color: #fff;
text-transform: uppercase;
cursor:pointer;
letter-spacing: 1px;

box-shadow: 0 7px #999;

&:hover {
    background-color: #1b1b1b;
}

&:active {
    background-color: black;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

&:focus {
    outline: none;
}

`

const Title = styled.h1 `
font-size: 3.5rem;
margin-bottom: 2rem;
`

const Link = styled.a `
text-decoration: none;
color #333;
font-size: 1.4rem;
maring: 1rem 0;
`

const ButtonAnimate = styled.button `
position: absolute;
z-index: 1000;
height: 5rem;
width: 5rem;
top: 70%;
border: none;
cursor: pointer;

right: ${(props) => (props.clicked ? "52%" : "42%") };
transform: ${(props) => (props.clicked ? "rotate(360deg)" : "rotate(0)") };
transition: all 1.5s;

background-color: transparent;

&::before {
    content: "🐙";
    font-size: 4rem;
}

&:focus {
    outline: none;
}
`
const Text = styled.div `
position: absolute;
z-index: 1000;
font-size: 1.5rem;
display: flex;
flex-direction: column;
letter-spacing: 0.2rem;
color: #fff;

.attention {
    font-size: 2.5rem;
    position: relative;
    margin-top: 2rem;
}

.attention-icon {
    position: absolute;
    right: ${(props) => (props.clicked ? "0" : "none")};
    top: 100%;
    font-size: 5rem;
}

`;

const ToggleComponent = (props) => {
    console.log(props);
    const [click, setClick] = useState(false);
    const [characterName, setCharacterName]= useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => setClick (!click);

    const submitLogin = (event) => {
        event.preventDefault();
        fetch('http://localhost:3005/user/login', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => 
            props.updateToken(data.token))
        .catch (error => console.log(error))
    }

    const submitRegister =(event) => {
        event.preventDefault();
        fetch('http://localhost:3005/user/register', {
            method: 'POST',
            body: JSON.stringify({characterName: characterName, username: username, password: password}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => props.updateToken(data.token))
        .catch(error => console.log(error))
    }
    
    return (
        <div>
            {" "}
            <BackgroundBox clicked={click}>
                <ButtonAnimate clicked={click} onClick={handleClick}></ButtonAnimate>
                {/* <img src={logoutGoob}/> */}
                <Form className = "login" onSubmit={submitLogin}>
                    <Title>Sign In</Title>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" name="username" value={username} placeholder="Username"/>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder="Password"/>
                    <Link href="#" >Forgot your Password?</Link>
                    <Button type="submit">Login</Button>
                </Form>
                <Form className="register" onSubmit={submitRegister}>
                    <Title>Register</Title>
                    <Input onChange={(e) => setCharacterName(e.target.value)} name="characterName" value={characterName} placeholder="Character Name"/>
                    <Input onChange={(e)=> setUsername(e.target.value)} name="username" value={username} placeholder="Username"/>
                    <Input onChange={(e) => setPassword(e.target.value) } name="password" value={password} placeholder="Password"/>
                    <Link href="#" onClick={handleClick}>Already have an Account?</Link>
                    <Button type="submit"> Sign Up</Button>
                </Form>
                
                <Text className = "registerTransfer">
                    <h1>Welcome! </h1>
                    Don't have an account?
                    <br />
                    <span className="attention">Click on the octopus</span>
                    <span className="attention-icon">⤶</span>
                </Text>
                <Text className="loginTransfer">
                    <h1>Hi There! </h1>
                    Already have an account?
                    <br />
                    <span className="attention">Click on the octopus</span>
                    <span className="attention-icon">⤷</span>
                </Text>
                
                
                <BoxOne clicked={click}/>
                <BoxTwo clicked={click}/>
            </BackgroundBox>
        </div>
    )
}

export default ToggleComponent;