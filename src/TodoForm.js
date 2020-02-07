import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';
// importin context
import {TodosContext} from './context/todos.context';

function TodoForm() {
    // custom hook
    const [value, handleChange, reset] = useInputState("");
    // taking method from "TodosContext" context
    const {dispatch} = useContext(TodosContext);
    console.log("Todo form render!!");
    return (
        // Paper is as a container
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={e=> {
                // by the default it would refresh the page
                e.preventDefault();
                dispatch({type: "ADD", task: value});
                // sets value to ""
                reset();
            }}>
                <TextField 
                    value={value} 
                    onChange={handleChange} 
                    margin="normal" 
                    label="Add New Task"
                    fullWidth    
                />
            </form>
        </Paper>
    )
}
export default TodoForm; 