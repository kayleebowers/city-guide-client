import { Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Todo } from "../todo-view/todo-view";
import { TodoButtons } from "../todo-buttons/todo-buttons";

export const ActivitiesCard = ({ activity, user, setUser, server, token }) => {
  //track todo items
  const [todo, setTodo] = useState(
    user ? user.Todos.includes(activity._id) : null
  );
  const [clicked, setClicked] = useState(false);

  // track completed items
  const [completed, setCompleted] = useState(
    user ? user.Completed.includes(activity._id) : null
  );

  // add activity to todo list
  const addToTodo = () => {
    fetch(`${server}/users/${user._id}/activities/${activity._id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(user);
        setTodo(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //remove activity from todo list
  const deleteTodo = () => {
    fetch(`${server}/users/${user._id}/activities/${activity._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(user);
        setTodo(!todo);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //add items to completed list
  const addCompleted = () => {
    fetch(`${server}/users/${user._id}/completed/${activity._id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(user);
        setCompleted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //remove completed item
  const deleteCompleted = () => {
    fetch(`${server}/users/${user._id}/completed/${activity._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(user);
        setCompleted(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Card style={{ height: "100%" }} className="border border-primary">
        <Link to={`/activities/${activity._id}`}>
          <Button className="w-100 rounded-top" style={{ borderRadius: "0" }}>
            <Card.Title>
              <h3>{activity.Name}</h3>
            </Card.Title>
          </Button>
        </Link>
        <Card.Img
          variant="top"
          src={activity.ImagePath}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "0",
          }}
        />
        <TodoButtons
          todo={todo}
          completed={completed}
          deleteTodo={deleteTodo}
          setClicked={setClicked}
          addToTodo={addToTodo}
          addCompleted={addCompleted}
          deleteCompleted={deleteCompleted}
          user={user}
        />
      </Card>
    </>
  );
};
