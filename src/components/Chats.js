// Create Chats component 
// In render function of Chats, map over the active user's messages props and for each message, return a Chat component
// Each Chat component will return text content wrapped in a span element
// We also need to differentiate btw the app user's message and the contact's message. 
// To do this, we render the class names based on the presence or absense of the is_user_msg flag using ternary operator

import React, {Component} from 'react';
import './Chats.css';

const Chat = ({message}) => {
    const { text, is_user_msg } = message;
    return (
        <span className={`Chat ${is_user_msg ? 'is-user-msg' : ''}`}> {text} </span>
    );
}

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }
    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map( message => (
                    <Chat message={message} key={message.number} />
                ))}
            </div>
        )
    }
}

export default Chats;