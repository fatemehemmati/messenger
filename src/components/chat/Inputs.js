import React from 'react'
import Send from './Send';

import style from './Inputs.module.css';
import attachFileImg from '../../assets/images/attach-file.png';
import UploadFile from './UploadFile';
const Inputs = (props) => {
    const clickHandler = () => {
     props.changePage("upload");
   };
 
  return (
    <div className={style.inputContainer}>
      <input className={style.inputText} type="text" />
       <div onClick={clickHandler}><img src={attachFileImg}  className={style.fileImg} alt="" /></div>
     
      <Send />
    </div>
  );
}

export default Inputs;