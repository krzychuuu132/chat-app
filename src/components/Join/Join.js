import React,{ useState ,useRef } from 'react';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap'

const Join = () => {
    const history = useHistory();

    const [ name,setName ] = useState('');
    const [ room,setRoom ] = useState('');
    const [ error,setError ] = useState(false);

    const errorRef = useRef(null);

    const handleJoinClick = (e) => {
        e.preventDefault();

        if(!name || !room) {
            setError(true);

            setTimeout(()=>{
                gsap.fromTo(errorRef.current,{opacity:0},{ duration:.5, opacity:1});
            },.2)

            
        }
        
        else {
            history.push(`/chat?name=${name}&room=${room}`);
            setError(false);
        }
       
    }

    return ( 
        <div className="wrapper">
            <div className="join">

                <h1 className="join__heading">Join</h1>

                <div className="join__wrapper">
                    <input className="join__wrapper-input" type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                    <input className="join__wrapper-input" type="text" onChange={(e)=>setRoom(e.target.value)} placeholder="Room"/>
                </div>

                <button className="join__btn" type="submit" onClick={handleJoinClick}>Sign In</button>

            </div>

            {error?<h1 onLoad={()=>console.log('eloo')} ref={errorRef}>Uzupełnij dane!!!!</h1>:null}

        </div>
     );
}
 
export default Join;