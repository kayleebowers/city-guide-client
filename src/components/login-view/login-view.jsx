import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Row, Col } from "react-bootstrap";

export const LoginView = ({ onLogin, server, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    //request being sent to api
    const data = {
      Username: username,
      Password: password,
    };

    //get matching user info from api
    fetch(`${server}/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      //get json object to extract user and JWT
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          //add data to local storage
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLogin(data.user, data.token);
          navigate("/users/:id");
        } else {
          alert("Account not found");
        }
      })
      .catch((error) => {
        alert("Something went wrong");
        console.error(error);
      });
  };

  return (
    <Col
      lg={6}
      md={8}
      sm={10}
      className="mx-auto p-5 d-flex flex-column"
      style={{ border: "1px solid red" }}
    >
      <div className="text-center">
        <h1 className="mx-auto mb-4">Login</h1>
      </div>
      <Form
        onSubmit={handleLogin}
        className="d-flex flex-column align-content-center justify-content-center"
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
        <Button variant="primary" type="submit" className="mx-auto mt-2">
          Login
        </Button>
      </Form>
    </Col>
  );
};
