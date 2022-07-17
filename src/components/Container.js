import ChatBox from './chat/ChatBox';
import Profile from './user/Profile';
import Contacts from './user/Contacts';

import style from './Container.module.css';

import React from 'react'

const Container = () => {
  return (
      <div  className={style.container}>
      <div className={style.leftSide}>
          <Profile />
        <Contacts />
      </div>  
      <ChatBox />
      </div>
  )
}

export default Container;