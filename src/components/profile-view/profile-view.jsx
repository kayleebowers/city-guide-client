import { ProfileUpdate } from "./profile-update-view/profile-update-view";
import { Todo } from "../todo-view/todo-view";
import { useEffect } from "react";
import { Col } from "react-bootstrap";

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
    <>
      <Col>
        <ProfileUpdate
          user={user}
          server={server}
          token={token}
          setUser={setUser}
          onLogout={onLogout}
        />
      </Col>
      <Col>
        <Todo user={user} server={server} token={token} activities={activities}/>
      </Col>
    </>
  );
};
