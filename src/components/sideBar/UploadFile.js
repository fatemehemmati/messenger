import React from 'react'
import attachFileImg from "../../assets/images/attach-file.png";
import style from './UploadFile.module.css';
const UploadFile = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={attachFileImg} alt="" />
      <h1>Upload file</h1>
      <p> browse</p>
      <label htmlFor="inputFile">
        <img className={style.fileImg} src={attachFileImg} alt="" />
      </label>
    </div>
  );
}

export default UploadFile;