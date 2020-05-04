// Create activeUserId reducer
// Set default value for activeUserId field in state to null
// Import the action type constant from the constants folder
// Check if type of action passed in is SET_ACTIVE_USER_ID
// If yes, then new value of activeUserId is set to action.payload, which contains the user_id of the user contact
// The ChatWindow component will now be rendered with the right activeUserId set 

import { SET_ACTIVE_USER_ID } from '../constants/action-types';

export default function activeUserId (state = null, action) {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload;
        default:
            return state;
    }
}