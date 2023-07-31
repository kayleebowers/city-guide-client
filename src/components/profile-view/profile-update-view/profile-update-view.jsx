import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router";

export const ProfileUpdate = ({ user, server, token, setUser, onLogout }) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.Email);

  const navigate = useNavigate();

  //update user info in API
  const handleUpdate = (e) => {
    e.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
    };

    fetch(`${server}/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Your profile was updated");
          return response.json();
        } else {
          alert("Update failed");
          console.error(error);
        }
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(user);
        navigate(`/users/${user._id}`);
      })
      .catch((error) => {
        console.error("Profile did not update");
      });
  };

  //delete user from api
  const handleDelete = () => {
    fetch(`${server}/users/${user._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert(`User ${user.Username} was deleted`);
          onLogout(`${user._id}`);
        } else {
          alert("Account deletion failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Form>
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
        <Button variant="primary" type="submit" onClick={handleUpdate}>
          Update your information
        </Button>
      </Form>
    </>
  );
};
