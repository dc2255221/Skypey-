// Create Chatwindow component which will be responsible for displaying the conversations for an active user contact
// ChatWindow will consist of 3 subcomponents: Header, Chats, and MessageInput
// Grab the state from the Redux store

// Building the Header component...
// Keep track of the active user. Retrieve by fetcthing user with the corresponding id field of activeUserId from the contacts object
// Pass the activeUser as props to Header as it will need to render name and status of the clicked user

// Building the Chats component... 
// Keep track of the messages of the active user. Retrieve from messages field using activeUserId
// Pass the activeUserMsgs as props to Chats
// Transform the activeUserMsgs object into an array using _.values() for easier iteration and rendering 

// Building the MessagesInput component...

import React from 'react';
import './ChatWindow.css';
import store from '../store';
import Header from '../components/Header';
import Chats from '../components/Chats';
import MessageInput from './MessageInput';
import _ from 'lodash';

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeUserMsgs = state.messages[activeUserId];
    const { typing } = state;
    return (
        <div className="ChatWindow"> 
            <Header user={activeUser}/>
            <Chats messages={_.values(activeUserMsgs)}/>
            <MessageInput value={typing}/>
        </div>
        );
}

export default ChatWindow;