import React from 'react'
import Profile from "./user/Profile";
import Contacts from "./user/Contacts";
import Logo from "./Logo";
import style from './LeftContainer.module.css';
const leftContainer = (props) => {
  const { user, changeChat, chatPage, contacts } = props;
  
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.profile}>
        <Profile user={user}/>
      </div>
      <div className={style.contacts}>
        <Contacts
          changeChatPage={changeChat}
          contacts={contacts}
          chatPage={chatPage}
        />
      </div>
    </div>
  );
}

export default leftContainer