import React, { useContext } from "react";
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
// importing context
import { TodosContext } from './context/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
    const { dispatch } = useContext(TodosContext);
    // setting the initial value of "value" to the current content of todo ("task")
    const [value, handleChange, reset] = useInputState(task);
    console.log("Editform render");
    return (
        // Need to have a state to control TextField
        <form onSubmit={(e) => {
            //to stop reloading page after submission
            e.preventDefault();
            dispatch({type: "EDIT", id: id, newTask: value});
            reset();
            toggleEditForm();
        }}
            style={{ marginLeft: "1rem", width: "50%" }}
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
                        dispatch({type: "EDIT", id: id, newTask: value});
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