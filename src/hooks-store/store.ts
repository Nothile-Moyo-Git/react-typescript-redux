/**
 * 
 * Store for a custom hook which manages global state
 */

import { useState, useEffect } from 'react';

// Defined globally so that it's not re-created
let globalState = {} as any;
let listeners = [] as any[];
let actions = {} as any;

const useStore = () => {

    // Store that we'll use this for each component which calls, each component will have it's own state and we'll point to it later
    const setStoreState = useState<any>(globalState)[1];

    // Store management system
    const dispatch = (actionIdentifier : string, payload : any) => {

        // actions should be an object with functions, and so we use the actionIdentifier to find the function we want
        // We then immediately execute the function with the use of parenthises
        const newState = actions[actionIdentifier](globalState, payload);

        // Add the new state to the global state
        globalState = {...globalState, ...newState};

        // Inform all listeners about the state update and re-render the component using the custom hook
        for (const listener of listeners) {

            // Update the listener with the new globalState and re-render the component each time we dispatch an action
            listener(globalState);
        }

    };

    // Run when component mounts and unmounts
    useEffect(() => {
    
        // Add the state function to the listeners array for each component that calls it
        listeners.push(setStoreState);

        // Executes a "clean up" function when the component unmounts
        return () => {

            listeners = listeners.filter((listener : any) => {
                return listener !== setStoreState;
            });
            
        };

    },[setStoreState]);

    // Return our hook reducer
    return[globalState, dispatch];

};

export const initStore = (userActions : any, initialState : any) => {

    if (initialState) {
        globalState = {...globalState, ...initialState};
    }

    actions = {...actions, ...userActions};

};

export default useStore;