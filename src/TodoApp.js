import React, {useEffect} from "react";
import useTodoState from './hooks/useTodoState';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    /*
    It here are data in localStorage it will use it, but if there is none, the empty array will be used
    */ 
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

    /*
    Extracting from the hook
    */ 
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);

    /*
    By the default function will run every time this component renders, therefore "[todos]" is passed. It will get run when "todos" will get changed
    */
    useEffect(() => {
        // "todos" is the key under which there will be entry in localStorage
        window.localStorage.setItem("todos", JSON.stringify(todos), [todos]);
    })

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
                style={{height: "64px"}}
            >
                <ToolBar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
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