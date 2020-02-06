// rfc (react functional component)
import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
// importin context
import { TodosContext } from './context/todos.context';

function TodoList() {
    const { todos } = useContext(TodosContext);
    if (todos.length) return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    // "<>" - Fragment, used to group things together. It will not cause extra markup
                    <>
                        <Todo
                            key={todo.id}
                            // instead of passing separately task, id and completed, will pass {...todo}
                            {...todo}
                        />
                        {/* Divider does not displayed after last Todo item */}
                        {(i < todos.length - 1) && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    );
    // if todos array is empty return null
    return null;
}
export default TodoList;