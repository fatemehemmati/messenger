import React, { useEffect } from "react";
import style from "./ChatBox.module.css";
import Message from "./messages/Message";


const ChatBox = (props) => {
  const { allMessages } = props;


  const getCurrentChatMessages = (chatId) => {
    fetch(
      `http://localhost:1337/api/messages?filters[chat][id][$eq=${chatId}&populate=*`
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        props.addMessage(response.data);
      });
  };
  useEffect(() => {
    window.addEventListener("showChat", (event) => {
      getCurrentChatMessages(event.detail.chatId);
    });
  }, []);

  return (
    <div>
      <div className={style.ChatBox}>
            <div className={style.chatTitle}>
          <p className={style.contactName}>
            {props.ChatPage.attributes ? props.ChatPage.attributes.Title : " "}
          </p>
        </div>
        <div className={style.chatList}>{allMessages.map((element, index) => (
      
          <Message user={props.user} key={index} message={element} />
        ))}</div>
        
      </div>
    </div>
  );
};
export default ChatBox;
