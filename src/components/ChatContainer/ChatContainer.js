import React from 'react';

import "./ChatContainer.scss";

const ChatContainer = ({room}) => {
    return ( 

        <div className="chat__container">

            <div className="chat__data">

                    <span className="chat__data-info">room : <span className="chat__data-important">{room}</span></span>

                    <span className="chat__data-info">to : <span className="chat__data-important"> </span></span>
            </div>

            <a href="/" className="chat__container-back">
                <span className="far fa-arrow-alt-circle-left"></span>
            </a>

        </div>

     );
}
 
export default ChatContainer;