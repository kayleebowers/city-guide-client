import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export const LoginView = ({ onLogin, server }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        
        //request being sent to api
        const data = {
            Username: username,
            Password: password
        }

        //get matching user info from api 
        fetch(`${server}/login`, {
            method: "POST",
            body: JSON.stringify(data)
        })
        //check for successful response
        .then((response) => {
            if (response.ok) {
                alert("Login successful")
            } else {
                alert("Account not found")
            }
        }).catch((error) => {
            alert("Something went wrong");
            console.error(error);
        })
    }    

    return (
        <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" required minLength={5} value={username} onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required minLength={5} value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form> 
    )
}