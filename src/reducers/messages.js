// Create messages reducer
// Import getMessages function to generate 10 random messages per user contact
// Set default value for messages field in state to generated messages data

import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../constants/action-types';

export default function messages (state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return '';
        default:
            return state;
    }
}