import React,{useState} from 'react';
import style from './ChatBox.module.css';
import Message from './messages/Message';

const ChatBox = (props) => {
 
 

  return (
    <div>
      <div className={style.ChatBox}>
        <div className={style.chatTitle}>
          <p className={style.contactName}>
            {props.ChatPage.attributes?props.ChatPage.attributes.Title:" "}
          </p>
        </div>
          <Message message={props.message} />
      </div>
    </div>
  );
}

export default ChatBox;