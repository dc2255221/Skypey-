// Create typing reducer
// Set default value for typing field in state to empty string
// Import the action type constant 
// Check if action dispatched has a type of SET_TYPING_VALUE
// If yes, then new value of typing is set to action.payload, which contains the value typed in the input
// Otherwise, the default state will be returned
// Check if action dispatched has a type of SEND_MESSAGE
// If yes, then new value of typing should be set to empty string

import { SET_TYPING_VALUE, SEND_MESSAGE } from '../constants/action-types';

export default function typing (state = '', action) {
    switch (action.type) {
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return '';
        default:
            return state;
    }
}