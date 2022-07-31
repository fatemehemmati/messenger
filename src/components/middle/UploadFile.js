import React from 'react'
import attachFileImg from "../../assets/images/attach-file.png";
import closeIcon from "../../assets/images/close.png"
import style from './UploadFile.module.css';
const UploadFile = (props) => {
  
  const clickCloseHandler = () => {
    props.changePage("chat");
  }
  return (
    <div>
      <div>
        <img onClick={clickCloseHandler} className={style.close} src={closeIcon} alt="" />
      </div>
      <div className={style.container}>
      <img className={style.img} src={attachFileImg} alt="" />
      <h1>Upload file</h1>
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