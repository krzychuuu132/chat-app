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
                    placeholder="Type something..."
                />

               <button type="submit" onClick={(e)=>sendMessage(e)}  className="form__btn"><span className="far fa-paper-plane form__btn-icon"></span></button>
              
              </form>
     );
}
 
export default Input;