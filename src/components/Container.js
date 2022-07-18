import ChatBox from './chat/ChatBox';
import Profile from './user/Profile';
import Contacts from './user/Contacts';

import style from './Container.module.css';

import React from 'react';

import Logo from './Logo';

const Container = () => {
  return (
      <div  className={style.container}>
      <div className={style.leftSide}>
        <Logo />
          <Profile />
        <Contacts />
      </div>  
      <ChatBox />
      </div>
  )
}

export default Container;