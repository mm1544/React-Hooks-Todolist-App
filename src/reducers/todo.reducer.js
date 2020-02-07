import uuid from "uuid/v4";
/*
 Defining reducer. "state" is a current state. Function will return a new version of the state.

 E.g. of passing value to "dispatch" method: 
    dispatch({type: "ADD", task: value})
    dispatch({type: "REMOVE", id: id})
    dispatch({type: "TOGGLE", id: id})
    dispatch({type: "EDIT", id: id, newTask: value})
*/
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            /*
            Takes evrything from the existing state, puts into array, and adds a new object with "id", "task", "complete"
            */
            return [...state, { id: uuid(), task: action.task, completed: false }];
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo);
        default:
            return state;
    }
};
export default reducer;