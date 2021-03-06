import React from 'react'
import ChatBox from './ChatBox';
import Inputs from './Inputs';
import style from './MiddleContainer.module.css'
const MiddleContainer = (props) => {
  const messageList=['hello darkness',' my old friend','Ive come to talk with  you again ', 'because a vision softly creeping','left its seeds while i was sleeping']
  return (
    <div className={style.middle}>
      <ChatBox reciever={true} messages={messageList} />
    
      <Inputs changePage={(page) => props.setPage(page)} />
    </div>
  );
}

export default MiddleContainer;