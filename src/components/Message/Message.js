import React,{ useState } from "react";


import "./Message.scss";


const Message = ({message:{ user,text},name}) => {
    let currentUser = false;

    const modifyName = name.trim().toLowerCase();
   

    if(user === modifyName) currentUser = true;
    console.log(user+' elo '+modifyName)

    return ( 
        currentUser ? 

        <div className="message__element message__element--user">

                    <p className="message__text message__text--user">{text}</p>

        </div> 
           
:
      
        
        <div className="message__element message__element--admin">

                    <p className="message__text">{text}</p>

        </div>
    
     );
}
 
export default Message;