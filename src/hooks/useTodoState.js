// using useLocalStorageState hook in this hook
import useLocalStorageState from "./useLocalStorageState";
import uuid from "uuid/v4";

export default initialTodos => {

    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

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

    // returning an object
    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo
    }
}


