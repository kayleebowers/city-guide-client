import Button from "react-bootstrap/Button";

export const Todo = ({ user, server, token, activities }) => {
  let listItems = activities.filter((activity) =>
    user.Todos.includes(activity._id)
  );
  console.log(listItems);
  return (
    <>
      <h3>Todo List</h3>
      <ul>
        {listItems.map((todo) => {
          return <li key={todo._id}>{todo.Name}</li>;
        })}
      </ul>
    </>
  );
};
