import React,{useState} from 'react'
import ChatBox from './ChatBox';
import Inputs from './Inputs';
import style from './MiddleContainer.module.css'
const MiddleContainer = (props) => {
    const [message, setMessage] = useState("");

  return (
    <div className={style.middle}>
      <ChatBox ChatPage={props.ChatPage} message={message} />
    
      <Inputs changePage={(page) => props.setPage(page)} setMessage={(msg)=>setMessage(msg)} />
    </div>
  );
}

export default MiddleContainer;