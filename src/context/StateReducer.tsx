import { InitialState } from "./StateContext";

type StateAction = 
    | { type: 'SET_BOOKS', payload: never[] }
    | { type: 'ALL_BOOKS', payload: never[] }
    | { type: 'SEARCH_CLOSE', payload: boolean }

const StateReducer = ( state: InitialState, action: StateAction ): InitialState => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                books: action.payload
            }
        case 'ALL_BOOKS':
            return {
                ...state,
                allBooks: action.payload
            }
        case 'SEARCH_CLOSE':
            return {
                ...state,
                showSearchInput: action.payload
            }
        default:
            return state;
    }    
}

export default StateReducer;
