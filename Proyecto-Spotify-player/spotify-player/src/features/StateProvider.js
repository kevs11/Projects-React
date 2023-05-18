import { Children, createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider= ({Children,initialState,reducer}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {Children}
    </StateContext.Provider>
);

export const useStateProvider =()=>useContext(StateContext);
