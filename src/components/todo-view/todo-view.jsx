import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";

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
  let listItems = activities.filter((activity) =>
    todo.includes(activity._id)
  );
  //get list of completed items
  const memories = activities.filter((activity) =>
    completed.includes(activity._id)
  );

  return (
    <>
      <h3>Todo List</h3>
      <ul>
        {listItems.map((todo) => {
          return (
            <>
              <Col className="d-flex">
                <li key={todo._id}>{todo.Name}</li>
                <input type="checkbox"></input>
              </Col>
            </>
          );
        })}
      </ul>
      <h3>Memories You've Made</h3>
      <ul>
        {memories.map((completed) => {
          return (
            <>
              <Col className="d-flex">
                <li key={completed._id}>{completed.Name}</li>
                <input type="checkbox"></input>
              </Col>
            </>
          );
        })}
      </ul>
    </>
  );
};
