import React from "react";
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';

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
        }}
            style={{marginLeft: "1rem", width: "50%"}}
        >
            <TextField 
                margin="normal" 
                value={value} 
                onChange={handleChange}
                fullWidth
                // "autoFocus" will automatically move cursor to TextField after clicking edit icon
                autoFocus
            />
            <ListItemSecondaryAction>
                <IconButton 
                    aria-label="Save" 
                    onClick={() => {
                        editTodo(id, value);
                        toggleEditForm();
                    }}
                >
                    <SaveIcon />
                </IconButton>
                <IconButton 
                    aria-label="Cancel" 
                    onClick={() => {
                        toggleEditForm();
                    }}
                >
                    x
                </IconButton>
            </ListItemSecondaryAction>
        </form>
    )
}
export default EditTodoForm;