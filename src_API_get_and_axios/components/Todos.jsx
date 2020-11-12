import React, { useEffect } from 'react';

const Todos = (props) => {

    useEffect(() => {
        
        props.getAPI('todos');
        return () => props.clearState();
      }, [])

    return (
        <ul>
        {props.todos.map(todo => {
            return <li key={todo.id}>
            {todo.title}, {(todo.completed) ? "Completed" : "Not Completed"}
            </li>
        })}
        </ul>
    )
}

export default Todos;