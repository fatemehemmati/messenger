import React, { useEffect,useState } from 'react';
import style from './ContactsProfile.module.css';

const ContactsProfile = (props) => {
  const [chatPage, setChatPage] = useState(1);
  const createChat = () => {
    fetch("http://localhost:1337/api/chats?populate=*", {
      method: "POST",
      body: JSON.stringify({
        data: {
          Title: props.contact.username,
          Owner: 1,
          Contact: props.contact.id,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
  const chatExist = (id) => {
 
    fetch("http://localhost:1337/api/chats?populate=*")
      .then(res => {
        return res.json();
      }).then(response => {
        const chat = response.data.find((element) => {
          console.log(element.attributes);
         return element.attributes.Contact.data.attributes.id === id;
        })
          
        return chat;
      })
  }
 
  const onClickHandler = () => {
    if(chatExist(props.contact.id)) {
    return chatExist(props.contact.id);
    } else {
    return createChat();
    }
 
 }
  return (
    <>
      <div onClick={onClickHandler} className={style.container}>
        <img
          className={style.avatar}
          src={
            "http://localhost:1337" +
            props.contact.avatar.data.attributes.formats.large.url
          }
          alt="avatar"
        />
        <p className={style.username}>{props.contact.firstname}</p>
      </div>
    </>
  );
}

export default ContactsProfile