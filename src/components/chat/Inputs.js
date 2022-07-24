import React from 'react'
import Send from './Send';

import style from './Inputs.module.css';
import attachFileImg from '../../assets/images/attach-file.png';
import UploadFile from '../sideBar/UploadFile';
const Inputs = (props) => {
  const clickHandler=()=>{
   props.changePage('upload')
 }
  return (
    <div className={style.inputContainer}>
      <input className={style.inputText} type="text" />
     
      <input onClick={clickHandler} className={style.inputFile} id="inputFile" type="file" />
     
      <Send />
    </div>
  );
}

export default Inputs;