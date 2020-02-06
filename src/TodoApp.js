import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from "./context/todos.context";

function TodoApp() {
    
    return (
        // Paper provides the background
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
                style={{ height: "64px" }}
            >
                <ToolBar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
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