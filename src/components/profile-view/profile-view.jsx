import { ProfileUpdate } from "./profile-update-view/profile-update-view";
import { Todo } from "../todo-view/todo-view";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const ProfileView = ({ user, server, token, setUser, onLogout, activities }) => {
  useEffect(() => {
    fetch(`${server}/users/${user._id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Could not get user info")
      }
    }).catch((error) => {
      console.error(error);
    })
  }, [user]);

  return (
    <Row className="d-flex flex-column align-items-center p-5" style={{border: "1px solid black"}}>
      <Col lg={6}
      md={8}
      sm={10}>
        <ProfileUpdate
          user={user}
          server={server}
          token={token}
          setUser={setUser}
          onLogout={onLogout}
        />
      </Col>
      <Col className="d-flex justify-content-evenly">
        <Todo user={user} server={server} token={token} activities={activities}/>
      </Col>
    </Row>
  );
};
