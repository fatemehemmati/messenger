import React, { useEffect,useState } from 'react';
import style from './ContactsProfile.module.css';

const ContactsProfile = (props) => {
 
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
    }).then(res => {
      return res.json();
    }).then(response => {
   
      const chat = response.data;
     props.changeChatPage(chat);
    });
  }
  const onClickHandler = () => {
    const { contact } = props;
    fetch("http://localhost:1337/api/chats?populate=*")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
     
        const chat = response.data.find((element) => {
         
          return element.attributes.Contact.data.id === contact.id;
        });

        if (chat) {
       
          props.changeChatPage(chat);
         
        } else {
          createChat();
        }
      });
  };
 

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