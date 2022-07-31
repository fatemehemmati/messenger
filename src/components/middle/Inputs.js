import React,{useState} from 'react'
import Send from './Send';

import style from './Inputs.module.css';
import attachFileImg from '../../assets/images/attach-file.png';
import UploadFile from './UploadFile';
const Inputs = (props) => {
  const [text, setText] = useState('');
    const clickHandler = () => {
     props.changePage("upload");
  };
  const onChangeHandler = (e) => {
  setText(e.target.value)
}
 
  return (
    <div className={style.inputContainer}>
      <input
        className={style.inputText}
        type="text"
        value={text}
        onChange={onChangeHandler}
      />
      <div onClick={clickHandler}>
        <img src={attachFileImg} className={style.fileImg} alt="" />
        {console.log(text)}
      </div>

      <Send />
    </div>
  );
}

export default Inputs;