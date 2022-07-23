import React from 'react'
import Send from './Send';

import style from './Inputs.module.css';
import attachFileImg from '../../assets/images/attach-file.png';
const Inputs = () => {
  return (
    <div className={style.inputContainer}>
      <input className={style.inputText} type="text" />
      <label htmlFor="inputFile" >
     <img className={style.fileImg} src={attachFileImg} alt="" />
      </label>
      <input className={style.inputFile} id="inputFile" type="file" />
      <Send />
    </div>
  );
}

export default Inputs;