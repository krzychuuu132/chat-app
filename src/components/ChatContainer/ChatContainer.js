import React from 'react';

import "./ChatContainer.scss";

const ChatContainer = ({room}) => {
    return ( 

        <div className="chat__container">
            <h1>{room}</h1>
            <a href="/" className="chat__container-back">Go back</a>
        </div>

     );
}
 
export default ChatContainer;