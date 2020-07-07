import React from 'react';

import "./ChatContainer.scss";

const ChatContainer = ({ room, usersInRoom, name }) => {

    const send_to_users = usersInRoom.filter(send_to_user=>send_to_user.name !== name);

    return ( 

        <div className="chat__container">

            <div className="chat__data">

                    <span className="chat__data-info">room : <span className="chat__data-important">{room}</span></span>

                    <span className="chat__data-info">to : {send_to_users.length? send_to_users.map((userInRoom,index)=><span className="chat__data-important" key={index}> {userInRoom.name},</span>):'Anyone'}</span>

                    <span className="chat__data-info">active : {usersInRoom.map((userInRoom,index)=><span className="chat__data-important" key={index}> {userInRoom.name},</span>)}</span>

            </div>

            <a href="/" className="chat__container-back">
                <span className="far fa-arrow-alt-circle-left"></span>
               
            </a>

        </div>

     );
}
 
export default ChatContainer;