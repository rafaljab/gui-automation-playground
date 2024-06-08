import {
  Box,
  Toolbar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { TodoList } from "../components/features/todos/TodoList";
import uuid from "react-uuid";

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>(
    localStorage.getItem("todos") == null ||
      localStorage.getItem("todos") === ""
      ? []
      : JSON.parse(localStorage.getItem("todos") as string),
  );
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { id: uuid(), text: newTodo, complete: false }]);
  };

  const handleClearTodos = () => {
    const newTodos: Todo[] = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h3" gutterBottom>
        TODOs
      </Typography>

      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px",
        }}
        component="form"
      >
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={9} md={9}>
            <TextField
              value={newTodo}
              onChange={handleChange}
              variant="outlined"
              margin="none"
              fullWidth
              sx={{ minHeight: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              fullWidth
              sx={{ minHeight: "100%" }}
            >
              Add Task
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Button
              onClick={handleClearTodos}
              variant="outlined"
              fullWidth
              sx={{ mb: 1 }}
            >
              Clear Completed Tasks
            </Button>
          </Grid>
        </Grid>
      </Box>

      {todos.length !== 0 ? (
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      ) : (
        <Typography variant="body1">There are no TODOs!</Typography>
      )}
    </Box>
  );
};

export default TodosPage;
