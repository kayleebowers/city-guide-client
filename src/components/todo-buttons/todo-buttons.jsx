import Card from "react-bootstrap/Card";
import { Col, Button } from "react-bootstrap";

export const TodoButtons = ({
  todo,
  deleteTodo,
  setClicked,
  addToTodo,
  addCompleted,
  deleteCompleted,
  user,
  completed,
}) => {
  return (
    <>
      {/* if user, add card body */}
      {user && (
        <Card.Body className="d-flex align-items-center justify-content-center">
          <>
            {/* add or remove activity from todo list*/}
            {todo ? (
              <Button
                onClick={() => {
                  deleteTodo();
                  setClicked(false);
                }}
                className="py-2 mx-1"
              >
                Delete Todo
              </Button>
            ) : (
              <Button
                onClick={() => {
                  addToTodo();
                  setClicked(true);
                }}
                className="py-2 mx-1"
              >
                Add Todo
              </Button>
            )}

            {/* add or remove activity from completed list*/}
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
        </Card.Body>
      )}
    </>
  );
};
