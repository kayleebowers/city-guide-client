import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

export const Todo = ({ user, server, token, activities }) => {
//get array of activities that matches user.Todos
  let listItems = activities.filter((activity) =>
    user.Todos.includes(activity._id)
  );

    //get list of completed items
    let completedItems = user.Completed;
    console.log(completedItems);
    
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
    </>
  );
};
