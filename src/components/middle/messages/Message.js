import React from 'react';
import avatar from "../../../assets/images/Profile_avatar_placeholder.png";

import style from './Message.module.css';

const Message = (prop) => {
 
  return (
    <div className={prop.reciever?style.MessageLeft:style.messageRight}>
     {prop.text}
    </div>
  );
}

export default Message;