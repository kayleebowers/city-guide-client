import { Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Todo } from "../todo-view/todo-view";

export const ActivitiesCard = ({ activity, user, setUser, server, token }) => {
  //track todo items
  const [todo, setTodo] = useState( user ? user.Todos.includes(activity._id) : false );
  const [clicked, setClicked] = useState(false);

  // track completed items
  const [completed, setCompleted] = useState(user ? user.Completed.includes(activity._id) : null);

  //fetch user data so page rerenders on change
  useEffect(() => {
    if (!user) {
      return;
    } else {
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
  }
  }, [user]);


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
        setUser(data);
        setTodo(true);
        console.log(user);
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
        setUser(data);
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
        setUser(data);
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
        setUser(data);
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
        {user && (
          <Card.Body className="d-flex align-items-center justify-content-center">
            <>
              {user && (
                <>
                  {todo ? (
                    <Button
                      onClick={() => {
                        deleteTodo();
                        setClicked(!clicked);
                      }}
                      className="py-2 mx-1"
                    >
                      Delete Todo
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        addToTodo();
                        setClicked(!clicked);
                      }}
                      className="py-2 mx-1"
                    >
                      Add Todo
                    </Button>
                  )}
                </>
              )}
              {user && (
                <>
                  {!completed ? (
                    <Button
                      className="py-2 mx-1"
                      onClick={() => {
                        addCompleted();
                        setClicked(true);
                      }}
                    >
                      Add Memory
                    </Button>
                  ) : (
                    <Button
                      className="py-2 mx-1"
                      onClick={() => {
                        deleteCompleted();
                        setClicked(false);
                      }}
                    >
                      Remove Memory
                    </Button>
                  )}
                </>
              )}
            </>
          </Card.Body>
        )}
      </Card>
    </>
  );
};