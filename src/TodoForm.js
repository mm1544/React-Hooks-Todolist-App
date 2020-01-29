import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';


function TodoForm({addTodo}) { // extracting "addTodo" from props
    // custom hook
    const [value, handleChange, reset] = useInputState("");
    return (
        // Paper is as a container
        <Paper>
            <form onSubmit={e=> {
                // by the default it would refresh the page
                e.preventDefault();
                addTodo(value);
                // sets value to "" (useInputState)
                reset();
            }}>
                <TextField value={value} onChange={handleChange}/>
            </form>
        </Paper>
    )
}
export default TodoForm; 