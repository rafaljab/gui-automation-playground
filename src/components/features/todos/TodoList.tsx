import React from "react";
import {FormGroup} from '@mui/material';
import {TodoItem} from "./TodoItem";

type PropsType = {
    todos: Todo[],
    toggleTodo: ToggleTodo
}

export const TodoList = ({todos, toggleTodo}: PropsType) => {
    if (Array.isArray(todos)) {
        return (
            <FormGroup>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
                ))}
            </FormGroup>
        )
    }
    return <FormGroup/>
}
