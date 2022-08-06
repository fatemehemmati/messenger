import React,{useState} from 'react';
import style from './ChatBox.module.css';
import Message from './messages/Message';

const ChatBox = (props) => {
   const [message, setMessage] = useState("");
 const sendMessage = () => {
   fetch(
     "http://localhost:1337/api/messages?filters[chat][id][$eq]=2&populate=*",
     {
       method: "POST",
       body: JSON.stringify({
         data: {
           Text: "string",
           Owner: "string or id",
           chat: "string or id",
         },
       }),
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
     }
   )
     .then((res) => {
       return res.json();
     })
     .then((response) => {
      setMessage(response.data);
     });
 };
console.log(message,"message")
  return (
    <div>
      <div className={style.ChatBox}>
        <div className={style.chatTitle}>
          <p className={style.contactName}>
            {props.ChatPage.attributes?props.ChatPage.attributes.Title:" "}
          </p>
        </div>
          <Message setMessage={(msg)=>(setMessage(msg))} />
      </div>
    </div>
  );
}

export default ChatBox;