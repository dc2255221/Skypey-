// Create Header component
// It will be a stateless functional component that renders a header element and h1 and p tags to hold name and status of activeUser

import React from 'react';
import './Header.css';

function Header({ user }) {
    const {name, status} = user;
    return (
        <header className='Header'>
            <h1 className='Header__name'> {name} </h1>
            <p className='Header__status'> {status} </p>
        </header>
    )
}

export default Header;

