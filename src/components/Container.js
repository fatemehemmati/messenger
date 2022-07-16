import ChatBox from './chat/ChatBox';
import Profile from './user/Profile';

import style from './Container.module.css';

import React from 'react'

const Container = () => {
  return (
      <div  className={style.container}>
          <Profile />
          
      <ChatBox />
      </div>
  )
}

export default Container;