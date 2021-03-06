// rfc (react functional component)
import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
    if(todos.length) return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    // "<>" - Fragment, used to group things together. It will not cause extra markup
                    <> 
                        <Todo 
                            // instead of passing separately task, id and completed, can pass {...todo}
                            {...todo}
                            key={todo.id}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        {/* Divider does not displayed after last Todo item */}
                        {(i < todos.length - 1) && <Divider/>}
                    </>
                ))}
            </List>
        </Paper>
    );
    // if todos array is empty return null
    return null;
}
export default TodoList;