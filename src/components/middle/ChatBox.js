import React from 'react';
import style from './ChatBox.module.css';
import Message from './messages/Message';

const ChatBox = (props) => {
  console.log(props.messages,'aaaaaaaaaaaaaaaaaaaaaaaaaa')
  return (
    <div>
      <div className={style.ChatBox}>
       
        {props.messages.map((e) => ( <Message text={e} reciever={props} />)
        
      )}
       
      
      </div>
   
    </div>
  );
}

export default ChatBox;