import { Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ActivitiesCard = ({ activity, user, setUser, server, token }) => {
  //track todo items
  const [todo, setTodo] = useState(user ? user.Todos.includes(activity._id) : null);
console.log(todo);
  // add activity to todo list
  const addToTodo = () => {
    fetch(`${server}/users/${user._id}/activities/${activity._id}`, {
      method: "POST",
      headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
      }
      }).then((response) => response.json())
        .then((data) => {
          alert("The activity was added to your todo list");
          localStorage.setItem("user", JSON.stringify(data));
          setUser(user);
          setTodo(true);
        }).catch((error) => {
          console.error(error);
        })
        }

  //remove activity from todo list
  const deleteTodo = () => {
    fetch(`${server}/users/${user._id}/activities/${activity._id}`, {
      method: "DELETE",
      headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
      }
      }).then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          setUser(user);
          setTodo(false);
          alert("The activity was deleted from your todo list");
        }).catch((error) => {
          console.error(error);
        })
      }

    return (
    <>
      <Link to={`/activities/${activity._id}`}>
        <Button>
          <Card className=" mw-80 mh-80">
            <Card.Img
              variant="top"
              src={activity.ImagePath}
              className="h-100 img-fluid"
            />
            <Card.Body>
              <Card.Title>{activity.Name}</Card.Title>
              <Card.Text>{activity.Description}</Card.Text>
              { user && (
                <>
                  { user.Todos.includes(activity._id) ? (
                    <Button onClick={deleteTodo}>Delete from Todo List</Button>
                  ) :
                  ( !user.Todos.includes(activity._id) && (
                    <Button onClick={addToTodo}>Add to Todo List</Button>
                  ))
                  }
                </>
              )}
            </Card.Body>
          </Card>
        </Button>
      </Link>
    </>
  );
};
