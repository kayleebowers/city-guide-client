import Button from "react-bootstrap/Button";

export const Todo = (({user, server, token, activities}) => {
    // let activity = activities.map((activity) => activity._id === user.Todos);
    // console.log(activity);

    return (
        <>
            <h3>Todo List</h3>
            <ul>
                <li>{user.Todos}</li>
            </ul>
        </>
    )
})