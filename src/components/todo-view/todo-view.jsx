import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Todo = ({ user, server, token, activities }) => {
  const [completed, setCompleted] = useState([]);
  const [todo, setTodo] = useState([]);

  //fetch completed items and todo items from database
  useEffect(() => {
    fetch(`${server}/users/${user._id}/completed`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((user) => {
        setCompleted(user.Completed);
        setTodo(user.Todos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //get array of activities that matches user.Todos
  let listItems = activities.filter((activity) => todo.includes(activity._id));
  //get list of completed items
  const memories = activities.filter((activity) =>
    completed.includes(activity._id)
  );

  return (
    <>
      <div className="d-flex flex-column align-items-center m-3 border border-primary w-100">
      <h3 className="m-4">Todo List</h3>
      <Carousel className="w-100" slide={false}>
          {listItems.map((todo) => {
            return (
              <Carousel.Item key={todo._id} style={{height: "50vh", width: "100%", overflow: "hidden"}}>
                <Link to={`/activities/${todo._id}`}>
                <Carousel.Caption>
                  <h3 className="bg-primary">{todo.Name}</h3>
                </Carousel.Caption>
                <img
                  style={{ height: "60vh", width: "100%", objectFit: "cover"}}
                  src={todo.ImagePath}
                  alt="slider image"
                />
                </Link>
              </Carousel.Item>
            );
          })}
      </Carousel >
      </div>
      <div className="d-flex flex-column align-items-center m-3 border border-primary w-100">
      <h3 className="m-4">Memories You've Made</h3>
      <Carousel slide={false}>
          {memories.map((completed) => {
            return (
              <Carousel.Item key={completed._id} style={{height: "50vh", width: "100%", overflow: "hidden"}}>
                <Link to={`/activities/${completed._id}`}>
                <Carousel.Caption>
                  <h3 className="bg-primary">{completed.Name}</h3>
                </Carousel.Caption>
                <img
                  style={{ height: "60vh", width: "100%", objectFit: "cover"}}
                  src={completed.ImagePath}
                  alt="slider image"
                />
               </Link>
              </Carousel.Item>
            );
          })}
      </Carousel>
      </div>
    </>
  );
};
