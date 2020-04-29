import React from 'react'
import "./Sidebar.css";
import User from '../containers/User';

// In Sidebar, map over the contacts props and render a User component for each contact.
// Each contact object is passed in as a user prop and user_id as a key to the User component
// ** In traditional React apps, you are required to pass down props from App to Sidebar and Main.
// ** With Redux, you are NOT bound by this rule. If a certain component needs access to a value from state object, you can simply reach out to store and retrieve the current state. No need to pass down props.   

const Sidebar = ({contacts}) => {
    return (
    <aside className="Sidebar"> 
        {contacts.map(contact => (
            <User user={contact} key={contact.user_id}></User>
        ))}
    </aside>
    );
}

export default Sidebar;

