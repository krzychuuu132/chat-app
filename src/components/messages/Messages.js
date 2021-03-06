import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "../Message/Message";

import "./Messages.scss";


const Messages = ({messages,name}) => {
    
    
    return ( 
        <ScrollToBottom className="message">
          
            {
                messages.map((message,index)=> <div key={index}> <Message message={message} name={name} time={message.time}/> </div> )
            }
                
        </ScrollToBottom>
     );
}
 
export default Messages;