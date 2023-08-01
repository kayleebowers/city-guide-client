import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

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
      <Col>
      <h3>Todo List</h3>
      <Carousel className="w-50">
          {listItems.map((todo) => {
            return (
              <Carousel.Item key={todo._id}>
                <Carousel.Caption>
                  <h3>{todo.Name}</h3>
                </Carousel.Caption>
                <img
                  style={{ height: "60vh", width: "100%", objectFit: "cover"}}
                  className="mh-10"
                  src={todo.ImagePath}
                  alt="slider image"
                />
              </Carousel.Item>
            );
          })}
      </Carousel>
      </Col>
      <Col>
      <h3>Memories You've Made</h3>
      <Carousel className="w-50">
          {memories.map((completed) => {
            return (
              <Carousel.Item key={completed._id}>
                <Carousel.Caption>
                  <h3>{completed.Name}</h3>
                </Carousel.Caption>
                <img
                  style={{ height: "60vh", width: "100%", objectFit: "cover"}}
                  className="mh-10"
                  src={completed.ImagePath}
                  alt="slider image"
                />
              </Carousel.Item>
            );
          })}
      </Carousel>
      </Col>
    </>
  );
};
