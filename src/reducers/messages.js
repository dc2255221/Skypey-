// Create messages reducer
// Import getMessages function to generate 10 random messages per user contact
// Set default value for messages field in state to generated messages data

// Import SEND_MESSAGE action type and refactor reducer to handle it
// We need to retain whatever messages are in state. 
// BUT, we want to add a new message only to the messages of the active user

import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../constants/action-types';
import _ from 'lodash';

export default function messages (state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, userId } = action.payload;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop() + 1;
            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            }
        default:
            return state;
    }
}