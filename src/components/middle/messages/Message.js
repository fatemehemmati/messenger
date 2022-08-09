import React from 'react';
import style from './Message.module.css';

const Message = (prop) => {
   const { user } = prop;
    const { message } = prop;
  console.log(user,"user");
  return (
    <div className={message.attributes.Owner.data.id===user.id?style.container:style.containerLeft}><div className={message.attributes.Owner.data.id===user.id? style.messageRight:style.MessageLeft}>
     {message.attributes.Text}
    </div></div>

    
  );
}

export default Message;