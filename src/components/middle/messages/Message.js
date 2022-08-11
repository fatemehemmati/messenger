import React from 'react';
import style from './Message.module.css';

const Message = (prop) => {
   const { user, message } = prop;
  return (
    <div className={message.attributes.Owner.data.id===user.id?style.container:style.containerLeft}><div className={message.attributes.Owner.data.id===user.id? style.messageRight:style.MessageLeft}>
     {message.attributes.Text}
    </div></div>

    
  );
}

export default Message;