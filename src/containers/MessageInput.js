// Create MessageInput, which will be a controlled component. Hence, we will be storing the input value in app state object
// When user types into input box, the onChange event is fired
// This in turn fires the handleChange function, which will dispatch the setTypingValue action we created, passing in the required payload
// Right now, when you type a message and hit enter, it doesnt show up in the conversation list, and the page reloads

// To update the list of messages in the conversation, we need to dispatch an action
// This action needs to take the value in input box and add it to the messages of the active user


import React from 'react';
import store from '../store';
import { setTypingValue, sendMessage } from '../actions';
import './MessageInput.css';

const MessageInput = ({ value }) => {
    const state = store.getState();
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    }
    const handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(sendMessage(typing, activeUserId));
    }
    return (
        <form className='Message' onSubmit={handleSubmit}>
            <input 
                className='Message__input'
                onChange={handleChange}
                value={value}
                placeholder='write a message'
            />           
        </form>
    )
}

export default MessageInput;