import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <>
            <h1 className="text-5xl text-center mt-20 mb-10" >Join The Room</h1>
            <div className="grid grid-cols-8">
                <div className="col-start-4 col-span-2 shadow-md border rounded bg-gray-800 p-5 text-gray-300">
                    <div className="my-1">
                        <label htmlFor="name" className="text-xl">Name:</label>
                        <input 
                        id="name" 
                        className="w-full rounded py-1 px-2 text-gray-900 text-xl" 
                        type="text" 
                        placeholder=""
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="room" className="text-xl">Room:</label>
                        <input 
                        id="room" 
                        className="w-full rounded py-1 px-2 text-gray-900 text-xl" 
                        type="text" 
                        placeholder=""
                        onChange={(e) => setRoom(e.target.value)}
                        />
                    </div>
                    <Link 
                    onClick={(e) => (!name || !room) ? e.preventDefault() : null} 
                    to={`/chat?name=${name}&room=${room}`} 
                    className="bg-teal-500 hover:bg-teal-400 rounded text-gray-900 text-xl mt-3 block py-1 text-center">Join</Link>
                </div>
            </div>
        </>
    )
}

export default Join;