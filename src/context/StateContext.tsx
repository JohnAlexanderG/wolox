import React, { createContext, useReducer } from 'react';
import StateReducer from './StateReducer';

// Definición de interface el cómo luce la información inicial.
export interface InitialState {
    isLogIn: boolean;
}

// Estado Inicial
export const initialState: InitialState = {
    isLogIn: false,
}

// Interface que expondremos al contexto de React
export interface ContextProps {
    initialState: InitialState;
    logIn: () => void;
}

// Creando el contexto
export const StateContext = createContext({} as ContextProps);

// Higher Order Component - proveedor del estado
export const StateProvider = ({ children }: { children: any }) => {

    const [state, dispatch] = useReducer(StateReducer, initialState);

    const logIn = () => {
        dispatch({ type: 'IS_LOG_IN' })
    }

    return (
        <StateContext.Provider value={{
            initialState: state,
            logIn
        }} >
            { children }
        </StateContext.Provider>
    );
}
