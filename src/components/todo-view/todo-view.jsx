import Button from "react-bootstrap/Button";
import { useParams } from "react-router";

export const Todo = ((user, server, token, activities) => {
    const { id } = useParams();
    const activity = activities.find((activity) => activity._id === id);

    fetch(`${server}/users/${user._id}/activities/${activity._id}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
        }).then((response) => {
        
        })

    return (
        <>
            <h3>Todo List</h3>
            <ul>
                <li>Test</li>
            </ul>
        </>
    )
})