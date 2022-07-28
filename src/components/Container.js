
import React, { useState } from "react";

import ChatBox from "./chat/ChatBox";
import Profile from "./user/Profile";
import Contacts from "./user/Contacts";
import RightSide from "./sideBar/RightSide";
import style from "./Container.module.css";
import Logo from "./Logo";
import Inputs from "./chat/Inputs";
import UploadFile from "./chat/UploadFile";


const Container = () => {
  const [page, setPage] = useState("chat");
  const [fullRightSide, setfullRightSide] = useState(false);
  return (
    <div className={`${fullRightSide? style.containerMed: style.containerFull}`}>
      <div className={style.leftSide}>
        <Logo />
        <Profile />
        <Contacts />
      </div>
      <div className={style.middle}>
        {page === "chat" ? (
          <ChatBox showFull={fullRightSide} />
        ) : (
          <UploadFile changePage={(page) => setPage(page)} />
        )}
        <Inputs changePage={(page) => setPage(page)} />
      </div>

      <div>
       <RightSide changeShowFull={(stat)=>setfullRightSide(stat)}  showFull={fullRightSide} />
      </div>
    </div>
  );
};

export default Container;
