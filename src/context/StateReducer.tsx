import { InitialState } from "./StateContext";

type StateAction = 
    | { type: 'IS_LOG_IN' }

const StateReducer = ( state: InitialState, action: StateAction ): InitialState => {
    switch (action.type) {
        case 'IS_LOG_IN':
            return {
                ...state,
                isLogIn: true,
            }
        default:
            return state;
    }    
}

export default StateReducer;
