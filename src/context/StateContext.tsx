import React, { createContext, useReducer } from 'react';
import StateReducer from './StateReducer';

// Definición de interface el cómo luce la información inicial.
export interface InitialState {
    books: never[];
    allBooks: never[];
    showSearchInput: boolean;
}

// Estado Inicial
export const initialState: InitialState = {
    books: [],
    allBooks: [],
    showSearchInput: false,
}

// Interface que expondremos al contexto de React
export interface ContextProps {
    initialState: InitialState;
    setBooks: (data: never[]) => void;
    setAllBooks: (data: never[]) => void;
    setShowSearchInput: (showSearchInput: boolean) => void;
}

// Creando el contexto
export const StateContext = createContext({} as ContextProps);

// Higher Order Component - proveedor del estado
export const StateProvider = ({ children }: { children: any }) => {

    const [state, dispatch] = useReducer(StateReducer, initialState);

    const setBooks = (data: never[]) => {
        dispatch({ type: 'SET_BOOKS', payload: data });
    }
    
    const setAllBooks = (data: never[]) => {
        dispatch({ type: 'ALL_BOOKS', payload: data });
    }

    const setShowSearchInput = (showSearchInput: boolean) => {
        dispatch({ type: 'SEARCH_CLOSE', payload: showSearchInput })
    }

    return (
        <StateContext.Provider value={{
            initialState: state,
            setBooks,
            setAllBooks,
            setShowSearchInput
        }} >
            { children }
        </StateContext.Provider>
    );
}
