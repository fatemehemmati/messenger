import React from 'react'
import sendIcon from "../../assets/images/send-button.png";
import style from './Send.module.css';
const Send = () => {
  return (
    <div><img className={style.sendImg} src={sendIcon} alt="" /></div>
  )
}

export default Send;