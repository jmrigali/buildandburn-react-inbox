import React from 'react';
import Message from './Message';

const MessageList = ({messages, toggleRead}) => {
     return (
       <div>
          {messages.map(message=>(<Message key={message.id} message= {message} toggleRead= {toggleRead}/>))}
       </div>
     )

}

export default MessageList;
