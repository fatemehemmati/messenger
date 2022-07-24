import React from 'react'
import attachFileImg from "../../assets/images/attach-file.png";
import style from './UploadFile.module.css';
const UploadFile = () => {
  return (
    <div>
      upload files
          <img className={style.img} src={attachFileImg} alt="" />
    </div>
  )
}

export default UploadFile;