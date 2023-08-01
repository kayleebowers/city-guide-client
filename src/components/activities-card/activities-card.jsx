import { Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Todo } from "../todo-view/todo-view";

export const ActivitiesCard = ({ activity, user, setUser, server, token }) => {
  //track todo items
  const [todo, setTodo] = useState(user ? user.Todos.includes(activity._id) : null);
  const [clicked, setClicked] = useState(false);

  // track completed items
  const [completed, setCompleted] = useState(user ? user.Completed.includes(activity._id) : null);

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
        "Content-Type": "application/json"
      }
    }).then((response) => response.json())
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(user);
      setCompleted(true);
      alert("Completed successful");
    }).catch((error) => {
      console.error(error);
    });
  };

  //remove completed item
  const deleteCompleted = () => {
    fetch(`${server}/users/${user._id}/completed/${activity._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => response.json())
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(user);
      setCompleted(false);
      alert("Deleted completed item");
    }).catch((error) => {
      console.error(error);
    })
  }

  return (
    <>
      <Card className=" mw-80 mh-80">
        { user && (
          <>
            { completed ? (
              <input type="checkbox" onChange={() => {
                addCompleted();
                setClicked(true);
              }}
              />
            ) : (
              <input type="checkbox" onChange={() => {
                deleteCompleted();
                setClicked(false);
              }}
              />
            )}
          </>
        )}  
        <Card.Img
          variant="top"
          src={activity.ImagePath}
          className="h-100 img-fluid"
        />
        <Card.Body>
          <Card.Title>{activity.Name}</Card.Title>
          <Link to={`/activities/${activity._id}`}>
            <Button>Learn more</Button>
          </Link>
          {user && (
            <>
              {todo ? (
                <Button
                  onClick={() => {
                    deleteTodo();
                    setClicked(false);
                  }}
                >
                  Delete from Todo List
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    addToTodo();
                    setClicked(true);
                  }}
                >
                  Add to Todo List
                </Button>
              )}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
