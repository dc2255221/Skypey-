// Build the user component...
// Get the name, profile_pic URL, and status of the user from props via destructuring
// Use these values in the return statement for proper rendering  
// Upon clicking a user from the sidebar, their messages will be shown. 

import React from 'react';
import './User.css';

const User = ({user}) => {
    console.log(user);
    const { name, profile_pic, status } = user;
    return (
        <div className="User">
            <img src={profile_pic} alt={name} className="User__pic"/>
            <div className="User__details">
                <p className="User_details-name"> {name} </p>
                <p className="User_details-status"> {status} </p>
            </div>
        </div>
    )
}

export default User;