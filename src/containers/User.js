// Build the user component...
// Get the name, profile_pic URL, and status of the user from props via destructuring
// Use these values in the return statement for proper rendering  

// Need to make sure that the activeUserId is set whenever a contact is clicked so that its' messages, contained within the ChatWindow component, will be shown. 
// Import the store and action creator, setActiveUserId
// Create the dispatch action function, handleUserClick, which takes in clicked user_id and calls store.dispatch() on action created from it
// Set up click handler on User div so that as soon as div is clicked, the dispatch action function is called
// The dispatched action will then flow to the reducers...

import React from 'react';
import './User.css';
import store from '../store';
import { setActiveUserId } from '../actions';

const User = ({ user }) => {
    const { name, profile_pic, status } = user;
    return (
        <div className="User" onClick={handleUserClick.bind(null, user)}>
            <img src={profile_pic} alt={name} className="User__pic"/>
            <div className="User__details">
                <p className="User_details-name"> {name} </p>
                <p className="User_details-status"> {status} </p>
            </div>
        </div>
    )
}

function handleUserClick({ user_id }) {
    // console.log(user_id);
    store.dispatch(setActiveUserId(user_id));
}

export default User;