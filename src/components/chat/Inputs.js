import React,{useState} from 'react'
import Send from './Send';

import style from './Inputs.module.css';
import attachFileImg from '../../assets/images/attach-file.png';
import UploadFile from '../sideBar/UploadFile';
const Inputs = () => {
  const [boxContent, changeboxContent] = useState(false);
  const clickHandler = () => {
    changeboxContent(current=>!current)
  };

  return (
    <div className={style.inputContainer}>
      <input className={style.inputText} type="text" />
      <label htmlFor="inputFile" >
     <img className={style.fileImg} src={attachFileImg} alt="" />
      </label>
      <input onClick={clickHandler} className={style.inputFile} id="inputFile" type="file" />
      {boxContent &&(<UploadFile />)}
      <Send />
    </div>
  );
}

export default Inputs;