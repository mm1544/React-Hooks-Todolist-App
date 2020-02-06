import React, { createContext } from "react";
// importing a HOOK
import useTodoState from '../hooks/useTodoState';
const defaultTodos = [
    { id: 1, task: "Read a book for 30min", completed: false },
    { id: 2, task: "Do some programming exercise", completed: true }
];

// creating context (exporting it because need to have an access to entire context)
export const TodosContext = createContext();

// Making todos PROVIDER
export function TodosProvider(props){
    // "useTodoState(..)" will return an object with many things inside of it
    const todoStuff = useTodoState(defaultTodos);
    return (
        // It will wrap around Component (that are its "children")
        <TodosContext.Provider 
            value={todoStuff}
        >
            {props.children}
        </TodosContext.Provider>
    )

}