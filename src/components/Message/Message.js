import React,{ useState } from "react";
import ReactEmoji from "react-emoji";
import moment from 'moment';

import "./Message.scss";
import adminPicture from "../../img/admin.png";
import User from "../../img/user.png";


const Message = ({message:{ user,text},name,time}) => {
    let currentUser = false;

    const modifyName = name.trim().toLowerCase();
   

    if(user === modifyName) currentUser = true;

    

    const insertSentDate = () => {
        const date = new Date(time);

        return date.toLocaleTimeString()
    }

    
    
    

    return ( 
        currentUser ? 

        <div className="message__element message__element--user">

                    <img src={User} alt="userPicture" className="message__element-img"/>
                    <p className="message__text message__text--user">{ReactEmoji.emojify(text)}<span className="message__text-user_name">Sent at {insertSentDate()} From {user}</span></p>
                    

        </div> 
           
:
      
        
        <div className="message__element message__element--admin">

                    <img src={user!=='admin'?User:adminPicture} alt="userPicture" className="message__element-img message__element-img--admin" style={user!=='admin'?{backgroundColor:"white",border:"1px solid white"}:null}/>
                    <p className="message__text">{ReactEmoji.emojify(text)}<span className="message__text-user_name">Sent at {insertSentDate()} From {user}</span></p>

        </div>
    
     );
}
 
export default Message;