import React,{ useState } from "react";
import ReactEmoji from "react-emoji";

import "./Message.scss";
import adminPicture from "../../img/admin.png";


const Message = ({message:{ user,text,src},name}) => {
    let currentUser = false;

    const modifyName = name.trim().toLowerCase();
   

    if(user === modifyName) currentUser = true;

    

    const insertSentDate = () => {
        const date = new Date();

        return date.toLocaleTimeString()
    }

    
    
    

    return ( 
        currentUser ? 

        <div className="message__element message__element--user">

                    <img src={src} alt="userPicture" className="message__element-img"/>
                    <p className="message__text message__text--user">{ReactEmoji.emojify(text)}<span className="message__text-user_name">Sent at {insertSentDate()} From {user}</span></p>
                    

        </div> 
           
:
      
        
        <div className="message__element message__element--admin">

                    <img src={user!=='admin'?src:adminPicture} alt="userPicture" className="message__element-img message__element-img--admin"/>
                    <p className="message__text">{ReactEmoji.emojify(text)}<span className="message__text-user_name">Sent at {insertSentDate()} From {user}</span></p>

        </div>
    
     );
}
 
export default Message;