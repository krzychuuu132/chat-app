import  React,{ useEffect , useState }  from 'react';
import  querystring from 'query-string';
import io from 'socket.io-client'

let socket;

const Chat = ({ location }) => {
    const ENDPOINT = 'localhost:5000';
   

    const [ name,setName ] = useState('');
    const [ room,setRoom ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [ message, setMessage ] = useState('');

    useEffect(() => {

        const  { name , room }  = querystring.parse(location.search);

         socket = io(ENDPOINT);
        
        socket.emit('join', { name , room },()=>{

        });

        setName(name);
        setRoom(room);

        return () =>{
            socket.emit('disconnect');

            socket.off();
        }
    },[ENDPOINT,location.search])

    useEffect( ()=> {

        socket.on('message', (message)=> {
            console.log(messages+' elooo')

            setMessages([...messages, message])

        })


    },[messages])

    const sendMessage = (e) =>{
       //e.preventDefault();
       console.log(message)

        if(message){
            socket.emit('sendMessage' , message, ()=> sendMessage(''));
        }
    }

    console.log(message,messages)

    return ( 
       <div>
           <div>
               <input 
               value={message} 
               onChange={(e)=>setMessage(e.target.value)} 
               onKeyPress={ e => e.key === 'Enter'?sendMessage(e):null}
             
               
               />
           </div>
       </div>
     );
}
 
export default Chat;