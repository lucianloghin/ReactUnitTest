import * as types from './actionTypes'

const initialState = [];
export function messages(state = initialState, action) {
    switch (action.type) {
        case types.ADD_MESSAGE:
            return addMessageToState(state, action.message);
        case types.DISMISS_MESSAGE:
            return [...state].filter(m => m.id !== action.message.id);
        default:
            return state;
    }        
};

function addMessageToState(state, message) {    
    return [...state, message];
}

//message.id
//message.body
//message.title