import React from 'react'
import attachFileImg from "../../assets/images/paperclip@2x.png";
import closeIcon from "../../assets/images/close.png"
import style from './UploadFile.module.css';
const UploadFile = (props) => {
  const { changePage } = props;
  const clickCloseHandler = () => {
    changePage("chat");
  }
  return (
    <div className={style.container}>
      <div>
        <img onClick={clickCloseHandler} className={style.close} src={closeIcon} alt="" />
      </div>
      <div className={style.stuffContainer}>
      <img className={style.img} src={attachFileImg} alt="" />
      <h2>Upload file</h2>
      <label htmlFor="inputFile">
       <p className={style.p}>browse</p> 
      </label>
      <input
       
        className={style.inputFile}
        id="inputFile"
        type="file"
      />
    </div></div>

  );
}

export default UploadFile;