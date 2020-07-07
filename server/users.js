

const users = [];


const addUser = ({  id, name, room, src }) => {
  
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const exisitingUser = users.find(user=>user.name === name && user.room === room);

    
    if(exisitingUser) {
       
        return {error: 'Username is taken :('}
    }

    const user = { id, name, room ,src};

    users.push(user);

    return { user };
}



const removeUser = (id) => {

    const findUser  = users.findIndex(user=>user.id === id);

    if(findUser !== -1) {
        return users.splice(findUser,1)[0];
    }
}



const getUser = (id) => users.find(user=> user.id === id);



const getUserInRoom = (room) => users.filter(user=> user.room === room);

const setUserSrc = (src,id) => {
    users.filter(user=> {
        if(user.id === id) user.src = src;
    })
        
  
}






module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom,
    setUserSrc
}