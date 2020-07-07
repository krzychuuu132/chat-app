import React,{ useState ,useRef , useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap';


import "./Join.scss";


const Join = () => {
  

    const history = useHistory();

    const [ name,setName ] = useState('');
    const [ room,setRoom ] = useState('');
    const [ pictureName,setPictureName ] = useState('');
    const [ error,setError ] = useState(false);

   
    const wrapperRef = useRef(null);
    const joinWrapperRef = useRef(null);
    const btnRef = useRef(null);
    const fileRef = useRef(null);

    useEffect(()=>{
        const tl = gsap.timeline({defaults:{ease:"power3.inOut"}});

        tl.fromTo(wrapperRef.current,{y:-400},{duration:.5, y:0});
        tl.fromTo(joinWrapperRef.current.children,{x:-200,opacity:0},{duration:.5, x:0,opacity:1,stagger:.2});
        tl.fromTo(btnRef.current,{y:200},{duration:.5, y:0});

    },[]);



    const handleJoinClick = (e) => {
        e.preventDefault();

        if(!name || !room || !pictureName) {
            setError(true);
           [...joinWrapperRef.current.children].forEach(element=>element.style.borderColor = "red");
            gsap.fromTo(joinWrapperRef.current.children,{x:80},{duration:.2, x:0});
           

        }
        
        else {
            history.push(`/chat?name=${name}&room=${room}`);
            setError(false);
        }
       
    }

    const changeSource = (e) =>{
        
        const element = e.target;
       
        const reader = new FileReader();

        reader.onload = e =>{
            const src = e.target.result;

            localStorage.removeItem('userPicture');
            localStorage.setItem('userPicture',src);

           
           fileRef.current.children[1].innerText = element.files[0].name;
           setPictureName(element.files[0].name);
        }

        reader.readAsDataURL(e.target.files[0])
    }

    return ( 
        <div className="wrapper" ref={wrapperRef}>
            <div className="join">

                <h1 className="join__heading">Join</h1>

                <div className="join__wrapper" ref={joinWrapperRef} >
                    <input className="join__wrapper-input" type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" />
                    <input className="join__wrapper-input" type="text" onChange={(e)=>setRoom(e.target.value)} placeholder="Room" />
                 
                         
                    <div className="custom-file" ref={fileRef}>

                        <input type="file" className="custom-file-input join__wrapper-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" onChange={changeSource}/>
                        <label className="custom-file-label join__wrapper-input" for="inputGroupFile01">Choose your's picture</label>

                    </div>
                         
                </div>

                <button className="join__btn" type="submit" onClick={handleJoinClick} ref={btnRef}>Sign In</button>

            </div>

         

        </div>
     );
}
 
export default Join;