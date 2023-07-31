import { useEffect } from "react";

export const Todo = (user, server, token) => {
    useEffect(() => {
        fetch(`${server}/activities`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        
        })

    }, []);

    return (
        <>
            <h3>Todo List</h3>
            <ul>
                <li>Test</li>
            </ul>
        </>
    )
}