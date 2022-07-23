import ChatBox from './chat/ChatBox';
import Profile from './user/Profile';
import Contacts from './user/Contacts';
import Files from './sideBar/Files';
import style from './Container.module.css';

import React from 'react';

import Logo from './Logo';
import People from './sideBar/People';

const Container = () => {
  return (
      <div  className={style.container}>
      <div className={style.leftSide}>
        <Logo />
          <Profile />
        <Contacts />
      </div>  
      <ChatBox />
      <div className={style.rightSide}>
        <Files />
        <People />
      </div>
      </div>
  )
}

export default Container;