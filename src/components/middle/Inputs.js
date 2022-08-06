import React,{useState} from 'react'


import style from './Inputs.module.css';
import attachFileImg from '../../assets/images/paperclip.png';
import sendIcon from "../../assets/images/SendButton.png";

const Inputs = (props) => {

    const clickHandler = () => {
     props.changePage("upload");
  };

  const sendHandler = (e) => {
    if (e.target.value.length > 0) {
      props.setMessage(e.target.value)
    }
 }
  return (
    <div className={style.inputContainer}>
      <input
        className={style.inputText}
        type="text"
        onChange={sendHandler}
      />
      <div onClick={clickHandler}>
        <img src={attachFileImg} className={style.fileImg} alt="" />
      </div>

      <div>
        <img onClick={sendHandler} className={style.sendImg} src={sendIcon} alt="" />
      </div>
    </div>
  );
}

export default Inputs;