import React from 'react';
import avatar from "../../../assets/images/Profile_avatar_placeholder.png";

import style from './Message.module.css';

const Message = () => {
  const messageList = [];
  return (
    <div >
      {(messageList[0] = <img className={style.avatar} src={avatar} alt="" />)}
{ (messageList[1] = <div className={style.Message}>hello darkness my old friend</div> )}
    </div>
  );
}

export default Message;