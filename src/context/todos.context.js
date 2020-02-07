import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
// importing a HOOK
import useTodoState from '../hooks/useTodoState';
const defaultTodos = [
    { id: 1, task: "Read a book for 30min", completed: false },
    { id: 2, task: "Do some programming exercise", completed: true }
];

/*
Creating context (exporting it because need to have an access to entire context)
*/
export const TodosContext = createContext();
export const DispatchContext = createContext();

// Making todos PROVIDER
export function TodosProvider(props) {
    /*
    useReducer returns: 
        1# todos -- new state value
        2# dispatch -- function that will be used to pass-in actions
    */
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return (
        // It will wrap around Components (that are its "children")
        <TodosContext.Provider
            value={todos}
        >
            <DispatchContext.Provider
                value={dispatch}
            >
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}