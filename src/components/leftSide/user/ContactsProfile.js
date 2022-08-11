import React,{useState} from 'react';
import style from './ContactsProfile.module.css';
import Modal from '../../ui/Modal';

const ContactsProfile = (props) => {
  const { contact, changeChatPage } = props;
   const [error, setError] = useState(null);
 //=======CREATING CHAT====== //
  const createChat = () => {
    fetch("http://localhost:1337/api/chats?populate=*", {
      method: "POST",
      body: JSON.stringify({
        data: {
          Title: contact.username,
          Owner: 1,
          Contact: contact.id,
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

    changeChatPage(chat);
    });
  }
  //====CHEKING IF CHAT EXIST======
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
         changeChatPage(chat);
           setTimeout(() => {
             const openChat = new CustomEvent("showChat", {
               detail: {
                 chatId: chat.id
             }});
             window.dispatchEvent(openChat);
           }, 300);
        } else {
          createChat();
        }
      }).catch((error) => {
        setError('something went wrong(in fetching chats)')
      });
  };
 

  return (
    <>
      <div onClick={onClickHandler} className={style.container}>
        <img
          className={style.avatar}
          src={
            "http://localhost:1337" +
            contact.avatar.data.attributes.formats.large.url
          }
          alt="avatar"
        />
        <p className={style.username}>{contact.firstname}</p>
      </div>
      {error && <Modal text={error} changeModal={(stat) => setError(stat)} />}
    </>
  );
}

export default ContactsProfile