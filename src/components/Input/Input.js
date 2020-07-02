import React from 'react';

import "./Input.scss";

const Input = ( { message , setMessage  , sendMessage} ) => {

    return ( 
              <form className="form">
               <input 
               value={message} 
               onChange={(e)=>setMessage(e.target.value)} 
               onKeyPress={ e => e.key === 'Enter'?sendMessage(e):null}
               type="text"
               className="form__input"
               />
               <button type="submit" onClick={(e)=>sendMessage(e)}  className="form__btn">Send message</button>
              </form>
     );
}
 
export default Input;