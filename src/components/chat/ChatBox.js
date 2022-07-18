import React from 'react';
import style from './ChatBox.module.css';
import Inputs from './Inputs';
import Message from './Message';

const ChatBox = () => {
  return (
    <div>
      <div className={style.ChatBox}>
        <div>chat box</div>
        <Message />
       <Inputs />
      </div>
   
    </div>
  );
}

export default ChatBox;