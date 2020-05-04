// Create Empty Component which will be displayed when no user is active
// It will take in a user prop and through ES6 destructuring, display first name, profile pic, and status

import React from 'react';
import './Empty.css';

const Empty = ({ user }) => {
    const { name, profile_pic, status } = user;
    const first_name = name.split(" ")[0]; 
    return (
        <div className="Empty">
            <h1 className="Empty__name"> Welcome, {first_name} </h1>
            <img src={profile_pic} alt={name} className="Empty__img"/>
            <p className="Empty__status">
                <b> Status: </b> {status}
            </p>
            <button className="Empty__btn"> Start a conversation </button>
            <p className="Empty__info">
                Search for someone to start chatting with or go to Contacts to see who is avaliable 
            </p>
        </div>
    );
}

export default Empty;