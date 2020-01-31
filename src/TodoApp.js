import React, {useState, useEffect} from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from "uuid/v4";

function TodoApp() {
    // It here are data in localStorage it will use it, but if there is none, the empty array will be used
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

    // const initialTodos = [
    //     {id: 1, task: "Pushups", completed: false},
    //     {id: 2, task: "Cooking breakfast", completed: true},
    //     {id: 3, task: "Morning work", completed: true},
    //     {id: 4, task: "Studying", completed: false},
    //     {id: 5, task: "BJJ", completed: false},
    // ]
    const [todos, setTodos] = useState(initialTodos);

    // by the default function will run every time this component renders, therefore "[todos]" is passed. It will get run when "todos" will get changed
    useEffect(() => {
        // "todos" is the key under which there will be entry in localStorage
        window.localStorage.setItem("todos", JSON.stringify(todos), [todos]);
    })

    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    };

    // wee need a  state (which will be toggled on and off)
    // that denotes whether it is todo-list is shown or a 
    // form inside edit-form is shown                                          
    const removeTodo = todoId => {
        // filter-out removed todo
        const newTodos = todos.filter(todo => todo.id !== todoId);
        // call setTodos with new todos array
        setTodos(newTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
        // updating the whole "todos" array
        setTodos(updatedTodos);
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask} : todo
        );
        // updating the whole "todos" array
        setTodos(updatedTodos);
    }

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