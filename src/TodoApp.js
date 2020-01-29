import React, {useState} from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';

function TodoApp() {
    const initialTodos = [
        {id: 1, task: "Pushups", completed: false},
        {id: 2, task: "Cooking breakfast", completed: true},
        {id: 3, task: "Morning work", completed: true},
        {id: 4, task: "Studying", completed: false},
        {id: 5, task: "BJJ", completed: false},
    ]
    const [todos, setTodos] = useState(initialTodos);
    return (
        // Paper provides a background
    <Paper
        style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0} 
    >
        <AppBar
            color='primary'
            position='static'
            style={{height: "64px"}}
        >
            <ToolBar>
                <Typography color='inherit'>TODOS WITH HOOKS</Typography>
            </ToolBar>
        </AppBar>
        <TodoList todos={todos}/>
    </Paper>
    )
}
export default TodoApp;


/*
// App  Structure:

-TodoApp (wil manage the state for Todos)
    -TodoForm
    -TodoList (list of all Todos)
        -TodoItem (each item on the list)



    -Todo
        -id
        -task/tekst
        -completed (t or f)
*/