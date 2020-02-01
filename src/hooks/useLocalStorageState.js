import {useState, useEffect} from "react";

function useLocalStorageState(key, defaultVal) {
    // if there is nothing in the storage under the key, defaultVal will be used

    /*
    Make a state, that is based off of the value in localStorage. Passing a function to "useState" to determin what to initialise "state" as. State will be set to whatever will be returned from this function.
     */ 
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        }
        catch (e) {
            val = defaultVal;
        }
        return val;
    });
     
    /*
    use useEffect to update localStorage when "state" changes. It is "listening" for a change of "key". It will sync with localStorage.
    */ 
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];


}
export default useLocalStorageState;

/*
eg. of use of this hook:
const [todos, setTodos] = useLocalStorageState("todos", [])
*/