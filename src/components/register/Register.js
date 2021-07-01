import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; 

const Register = (props) => {
    const [characterName, setCharacterName]= useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =(event) => {
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
    

    return(
        <div>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                    <Label htmlFor="characterName">Character Name</Label>
                    <Input onChange={(e) => setCharacterName(e.target.value)} name="characterName" value={characterName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>

        </div>
    )
}

export default Register;