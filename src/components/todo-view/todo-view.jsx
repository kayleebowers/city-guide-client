import Button from "react-bootstrap/Button";

export const Todo = (({user, server, token, activities}) => {
    let todos = user.Todos;
    console.log(todos);
    return (
        <>
            <h3>Todo List</h3>
            {todos.map((todo) => {
                return (
                <ul>
                    <li key={todo}>{todo}</li>
                </ul>
                )
            })}
        </>
    )
})