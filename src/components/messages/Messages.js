import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "../Message/Message";

import "./Messages.scss";


const Messages = ({messages,name}) => {
    return ( 
        <ScrollToBottom>
                <div className="message">
            {
                messages.map((message,index)=> <div key={index}> <Message message={message} name={name}/> </div> )
            }
                </div>
        </ScrollToBottom>
     );
}
 
export default Messages;