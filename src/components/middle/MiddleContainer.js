import React from 'react'
import ChatBox from './ChatBox';
import UploadFile from './UploadFile';
import Inputs from './Inputs';
import style from './MiddleContainer.module.css'
const MiddleContainer = (props) => {
  return (
    <div className={style.middle}>
        <ChatBox />
      <Inputs changePage={(page) => props.setPage(page)} />
    </div>
  );
}

export default MiddleContainer;