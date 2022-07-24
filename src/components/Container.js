import ChatBox from './chat/ChatBox';
import Profile from './user/Profile';
import Contacts from './user/Contacts';
import Files from './sideBar/Files';
import style from './Container.module.css';

import React,{useState} from 'react';

import Logo from './Logo';
import People from './sideBar/People';
import Inputs from './chat/Inputs';
import UploadFile from './sideBar/UploadFile';
const Container = () => {
  const [page, setPage] = useState('chat');
  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <Logo />
        <Profile />
        <Contacts />
      </div>
      <div className={style.middle}>
        {page==='chat'? <ChatBox />:<UploadFile /> }
        <Inputs changePage={(page)=>setPage(page)} />
      
      </div>
     
      <div className={style.rightSide}>
        <Files />
        <People />
      </div>
    </div>
  );
}

export default Container;