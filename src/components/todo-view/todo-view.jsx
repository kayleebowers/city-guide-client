import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Todo = ({ user, server, token, activities }) => {
  const [completed, setCompleted] = useState([]);

//get array of activities that matches user.Todos
  let listItems = activities.filter((activity) =>
    user.Todos.includes(activity._id)
  );

    useEffect(() => {
      fetch(`${server}/users/${user._id}/completed`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => response.json())
      .then((completed) => {
        setCompleted(completed.Completed);
      }).catch((error) => {
        console.error(error);
      })
    }, [])

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
