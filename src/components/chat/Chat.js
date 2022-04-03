import React from 'react';
import './Chat.css';
import Avatar from "@material-ui/core/Avatar";

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <h1>CHATS</h1>
            </div>

            <div className="chat_body">
                <div className="chat_user">
                    <Avatar 
                        className="chat_avatar"
                        alt="Pravin"
                        src="/static/images/avatar/1.jpg"
                    />
                    <h3>Pravin</h3>
                </div>
                <div className="chat_user">
                    <Avatar 
                        className="chat_avatar"
                        alt="Aditya"
                        src="/static/images/avatar/1.jpg"
                    />
                    <h3>Aditya</h3>
                </div>
                <div className="chat_user">
                    <Avatar 
                        className="chat_avatar"
                        alt="Pratim"
                        src="/static/images/avatar/1.jpg"
                    />
                    <h3>Pratim</h3>
                </div>
                <div className="chat_user">
                    <Avatar 
                        className="chat_avatar"
                        alt="Sayantan"
                        src="/static/images/avatar/1.jpg"
                    />
                    <h3>Sayantan</h3>
                </div>
                <div className="chat_user">
                    <Avatar 
                        className="chat_avatar"
                        alt="Sanjit"
                        src="/static/images/avatar/1.jpg"
                    />
                    <h3>Sanjit</h3>
                </div>
            
            
            </div>
        </div>
    );
}
export default Chat;    

