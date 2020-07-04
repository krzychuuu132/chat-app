import  React,{ useEffect , useState }  from 'react';
import  querystring from 'query-string';
import io from 'socket.io-client';

import Input from "../Input/Input";
import ChatContainer from "../ChatContainer/ChatContainer";

import "./Chat.scss";
import Messages from '../messages/Messages';

let socket;

const Chat = ({ location }) => {
   
    const ENDPOINT = 'https://react-chat-app12.herokuapp.com/';
    const  { name: user_name , room: user_room }  = querystring.parse(location.search);
   
//https://react-chat-app12.herokuapp.com/'
    const [ name,setName ] = useState(user_name);
    const [ room,setRoom ] = useState(user_room);
    const [ messages, setMessages ] = useState([]);
    const [ message, setMessage ] = useState('');

    useEffect(() => {

        
      

         socket = io(ENDPOINT);
        
        socket.emit('join', { name:user_name , room:user_room },()=>{

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
          

            setMessages([...messages, message])

        })


    },[messages])

    const sendMessage = (e) =>{
       //
      
       e.preventDefault()

       console.log(message)

        if(message){
            socket.emit('sendMessage' , message, ()=> sendMessage(''));
        }
    }

    console.log(message,messages)

    return ( 
       <div className="wrapper">
           <div className="chat">
               <ChatContainer room={room}/>
               <Messages messages={messages} name={name}/>
               <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
           </div>
       </div>
     );
}
 
export default Chat;