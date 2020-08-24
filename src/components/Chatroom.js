import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Messages from './Messages';

let socket;

const Chatroom = ({location}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    const endpoint = 'https://react-socket-io-app.herokuapp.com/';

    useEffect(() => {

        const queryString = new URLSearchParams(location.search);
        const name = queryString.get('name');
        const room = queryString.get('room');

        setName(name);
        setRoom(room);
        
        socket = io(endpoint);

        socket.emit('join', { name, room }, () => {
            
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [endpoint, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    useEffect(() => {
        socket.on('roomData', ({users}) => {
            setUsers(users);
        });
    }, [users]);

    const sendMessage = () => {
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="bg-gray-800 rounded min-h-screen">
            <div className="text-3xl text-center text-gray-200 pt-10">Room: {room}</div>
            <div className="flex">
                <div className="m-auto my-5 rounded border w-8/12 overflow-y-scroll" style={{height: "450px"}}>
                    <Messages messages={messages} name={name}/>
                </div>
                <div className="m-auto my-5 rounded border w-3/12 overflow-y-scroll" style={{height: "450px"}}>
                    <div className="text-white text-xl md:text-3xl text-center">Users:</div>
                    {
                        users.filter(user => user.name !== name.toLowerCase()).map(user => {
                            return (
                                <div className="text-white text-xl px-2 py-1" key={user.id}>{user.name}</div>
                            )
                        })
                    }
                </div>
            </div>
            <input 
            type="text"
            value={message}
            placeholder="Say something..."
            className="w-full md:w-7/12 block m-auto rounded  py-2 px-3 bg-gray-900 text-white text-xl"
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
            />
        </div>
    )
}

export default Chatroom;
