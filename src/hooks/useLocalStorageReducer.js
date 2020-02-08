/*
Custom HOOK that is using reducer inside
*/ 

import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {

    // passing reducer and initial value (defaultVal), AND a function which returned value will determin an (!!)initial state(!!)
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let val;
        // checks if there is any data in localStorage under the "key"; if there is, we will use that value from localStorage
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        }

        catch (e) {
            val = defaultVal;
        }
        return val;
    })

    /*
    use useEffect to update localStorage when "state" changes. It is "listening" for a change of "key". It will sync with localStorage.
    */
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, dispatch];
}
export { useLocalStorageReducer };