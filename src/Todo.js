import React, {useContext} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
// DeleteIcon will be placed in IconButton
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// It allowes to have content (buttons) on the right side of ListItem
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { TodosContext } from './context/todos.context';

function Todo({ task, completed, id}) {
    // taking needed methods from the Context
    const {removeTodo, toggleTodo} = useContext(TodosContext);
    // by the default false is passed to useToggleState()
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem style={{ height: "64px" }}>
            {/* If isEditing==true then editing form is rendered, otherwise - todo-list */}
            {isEditing ? (
                <EditTodoForm
                    id={id}
                    task={task}
                    toggleEditForm={toggle}
                />
            )
                : (
                    <>
                        <Checkbox
                            tabIndex={-1}
                            checked={completed}
                            onClick={() => toggleTodo(id)}
                        />
                        <ListItemText
                            style={{ textDecoration: completed ? "line-through" : "none" }}
                        >
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            {/* "aria-label" is for creen-reader */}
                            <IconButton
                                aria-label="Delete"
                                onClick={() => removeTodo(id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Edit"
                                onClick={toggle}
                            >
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                )}
        </ListItem>
    )
}
export default Todo;