const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const { addUser, removeUser, getUser, getUserInRoom, setUserSrc } = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./router');
const users = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


    io.on('connection', ( socket ) => {
   

        socket.on('join',({ name , room }, callback)=> {
      
      
        const { error , user } = addUser({ id:socket.id , name , room });
        
      
       
        if(error) callback(error);
        
        socket.emit('message',{user:'admin', text:`${user.name}, welcome to the room ${user.room}!`});
        socket.broadcast.to(user.room).emit('message',{ user: 'admin', text: `${user.name},has joined!` })

        socket.join(user.room);


        const users_in_room = getUserInRoom(user.room);
        io.to(user.room).emit('getRoomData',{users:users_in_room});

        

        callback();

       
    })

    socket.on('sendMessage',(message,callback)=>{
        const user = getUser(socket.id);
     
       
        io.to(user.room).emit('message',{ user: user.name ,text : message});

        
        const users_in_room = getUserInRoom(user.room);
        io.to(user.room).emit('getRoomData',{users:users_in_room});

        callback();
    })

  
    socket.on('disconnect',()=>{
        const  user  = removeUser(socket.id);
        console.log('disconnet')

        if(user){
            io.to(user.room).emit('message',{user: 'admin',text: `${user.name} had left !`})
        }
    })


})


app.use(router);
app.use(cors());


server.listen(PORT,()=>console.log(`Server has stated on ${PORT} port`));