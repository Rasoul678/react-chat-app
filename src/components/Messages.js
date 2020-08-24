import React from 'react';
import uuid from 'react-uuid';
import ReactEmoji from 'react-emoji';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({messages, name}) => {
    return (
        <ScrollToBottom className="h-full">
            {
                messages?.map(message => {
                    if(message.user !== name.toLowerCase()){
                        return (
                            <div className="grid grid-cols-3" key={uuid()}>
                                <div className="col-span-2 m-2 flex justify-start">
                                    <p  
                                    className={`${message.user === 'admin'? ( 'bg-orange-300') : ( 'bg-purple-400')} p-2 px-3 rounded rounded-tl-none text-left inline-block`}>
                                        <span className="block font-bold">{message.user}: {message.date.slice(4, 25)}</span>
                                        {ReactEmoji.emojify(message.text)}
                                    </p>
                                </div>
                            </div>
                        )
                    }else{
                        return (
                            <div className="grid grid-cols-3" key={uuid()}>
                                <div className="col-start-2 col-span-2 m-2 flex justify-end">
                                    <p  
                                    className=" bg-teal-400 p-2 px-3 rounded rounded-tr-none text-right inline-block">
                                        <span className="block font-bold">{message.user}: {message.date.slice(4, 25)}</span>
                                        {ReactEmoji.emojify(message.text)}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </ScrollToBottom>
    )
}

export default Messages
