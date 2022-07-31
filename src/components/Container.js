
import React, { useState } from "react";

import ChatBox from "./middle/ChatBox";
import Profile from "./user/Profile";
import Contacts from "./user/Contacts";
import RightSide from "./sideBar/RightSide";
import UploadFile from "./middle/UploadFile";
import style from "./Container.module.css";
import Logo from "./Logo";

import MiddleContainer from "./middle/MiddleContainer";


const Container = () => {
  const [page, setPage] = useState("chat");
  const [fullRightSide, setfullRightSide] = useState(false);
  return (
    <div
      className={`${fullRightSide ? style.containerMed : style.containerFull}`}
    >
      <div className={style.leftSide}>
        <Logo />
        <Profile />
        <Contacts />
      </div>
      <div> {page==='chat'?(<MiddleContainer  setPage={setPage} />): (
        <UploadFile changePage={(page) => setPage(page)} />
      )}</div>
     
      
      <div>
        <RightSide
          changeShowFull={(stat) => setfullRightSide(stat)}
          showFull={fullRightSide}
        />
      </div>
    </div>
  );
};

export default Container;
