import React from "react";
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditTodoForm({id, editTodo, task, toggleEditForm}) {
    // setting the initial value of "value" to the current content of todo ("task")
    const [value, handleChange, reset] = useInputState(task);
    return (
        // Need to have a state to control TextField
        <form onSubmit={(e) => {
            //to stop reloading page after submission
            e.preventDefault();
            // updating todos array
            editTodo(id, value);
            reset();
            toggleEditForm();
        }}>
            <TextField 
                margin="normal" 
                value={value} 
                onChange={handleChange}
                fullWidth
            />
        </form>
    )
}
export default EditTodoForm;