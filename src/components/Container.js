
import React, { useState } from "react";



import RightSide from "./rightSide/RightSide";
import UploadFile from "./middle/UploadFile";
import style from "./Container.module.css";


import MiddleContainer from "./middle/MiddleContainer";
import LeftContainer from "./leftSide/leftContainer";
const Container = () => {
  const [page, setPage] = useState("chat");
  const [fullRightSide, setfullRightSide] = useState(false);
  return (
    <div
      className={`${fullRightSide ? style.containerMed : style.containerFull}`}
    >
      <div className={style.leftSide}>
       <LeftContainer />
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
