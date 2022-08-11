import React,{useState} from 'react'
import ChatBox from './ChatBox';
import Inputs from './Inputs';
import style from './MiddleContainer.module.css';
import logo from "../../assets/images/Logo.png";
const MiddleContainer = (props) => {
  const { ChatPage, user } = props;
   const [allMessages, setAllMessages] = useState([]);

  return (
    <div>
      {props.ChatPage ? (
        <div className={style.middle}>
          <ChatBox
            user={user}
            ChatPage={ChatPage}
            allMessages={allMessages}
            addMessage={(msg) => setAllMessages(msg)}
          />

          <Inputs
            ChatPage={ChatPage}
            changePage={(page) => props.setPage(page)}
            addMessage={(msg) => setAllMessages(msg)}
            allMessages={allMessages}
          />
        </div>
      ) : (
        <div className={style.default}>
          <img src={logo} className={style.logoimg} alt="" />
          <p className={style.defaultText}>
            select a contact to start a conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default MiddleContainer;