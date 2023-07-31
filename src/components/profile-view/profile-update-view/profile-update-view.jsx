import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

export const ProfileUpdate = ({user, server, token}) => {
    const [username, setUsername] = useState(user.Username);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(user.Email);

    const handleUpdate = (e) => {
        e.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email
        };
        
        fetch(`${server}/users/${user._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/JSON",
                Authorization: `Bearer: ${token}`
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.ok) {
                    alert("Your profile was updated");
                    return response.json();
                } else {
                    alert("Update failed");
                }
            }).then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
                setUsername(user);
            }).catch((error) => {
                console.error("Profile did not update");
            })
    }
    return (
        <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" required minLength={5} value={username} onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required minLength={5} value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update your information
        </Button>
      </Form> 
    )
}