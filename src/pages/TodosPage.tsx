import {Box, Toolbar, Typography, TextField, Button, Stack} from '@mui/material';
import React, {useState, ChangeEvent, FormEvent} from 'react';
import {TodoList} from '../components/features/todos/TodoList';
import uuid from 'react-uuid';

const TodosPage = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState<string>("")

    const toggleTodo: ToggleTodo = selectedTodo => {
        const updatedTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {...todo, complete: !todo.complete};
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== "" &&
        setTodos([...todos, {id: uuid(), text: newTodo, complete: false}]);
    }

    const handleClearTodos = () => {
        const newTodos: Todo[] = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo("")
    }

    return (
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Toolbar/>
            <Typography variant='h3' gutterBottom>TODOs</Typography>
            <form>
                <Stack spacing={2} direction="row">
                    <TextField value={newTodo} onChange={handleChange} variant="outlined"/>
                    <Button onClick={handleSubmit} variant="contained">Add Task</Button>
                    <Button onClick={handleClearTodos} variant="outlined">Clear Completed Tasks</Button>
                </Stack>
            </form>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
        </Box>
    )
}

export default TodosPage;