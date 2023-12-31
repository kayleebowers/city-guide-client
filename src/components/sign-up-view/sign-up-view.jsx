import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Row, Col } from "react-bootstrap";

export const SignUpView = ({ server }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    //define request body
    const data = {
      Username: username,
      Password: password,
      Email: email,
    };

    //Post to api to create new user
    fetch(`${server}/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Sign up successful");
          navigate("/login");
        } else {
          alert("Sign up failed");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong");
      });
  };

  return (
    <Col
      lg={6}
      md={8}
      sm={10}
      className="mx-auto p-5"
    >
      <div className="text-center">
        <h1 className="mx-auto mb-4">Sign up to track your activities</h1>
      </div>
      <Form
        onSubmit={handleSignUp}
        className="d-flex flex-column justify-content-center"
      >
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            required
            minLength={5}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            minLength={5}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mx-auto mt-2">
          Sign up
        </Button>
      </Form>
    </Col>
  );
};
