// Create the action creator, setActiveUserId, which will be used to set the activeUserId when a user is clicked
// Import the action type string, SET_ACTIVE_USER_ID from the constants folder
// It will take in an id of a user and return the action (an object) with the type and payload rightly set

// Create the action creator, setTypingValue
// Import the action type string, SET_TYPING_VALUE from the constants folder

import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE } from '../constants/action-types';

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
})