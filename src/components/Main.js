// The Main component is responsible for displaying the Empty component when no user is active
// As soon as a user is clicked, activeUserId is set to clicked user and Main renders the ChatWindow component, that is the conversations of the clicked user

import React from 'react'
import './Main.css';
import Empty from './Empty';
import ChatWindow from '../containers/ChatWindow';

const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId}/>
        } else {
            return <ChatWindow activeUserId={activeUserId}/>
        }
    };
    return <main className="Main"> { renderMainContent() } </main>;
};

export default Main;