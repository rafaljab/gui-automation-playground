import { FormControlLabel, Checkbox } from "@mui/material";
import { Todo, ToggleTodo } from "@app-types/todos";

type PropsType = {
    todo: Todo;
    toggleTodo: ToggleTodo;
};

export const TodoItem = ({ todo, toggleTodo }: PropsType) => {
    return (
        <FormControlLabel
            control={
                <Checkbox checked={todo.complete} onChange={() => toggleTodo(todo)} />
            }
            label={todo.text}
            data-testid="todo-item"
        />
    );
};
