import React,{useState} from 'react'


import style from './Inputs.module.css';
import attachFileImg from '../../assets/images/paperclip.png';
import sendIcon from "../../assets/images/SendButton.png";

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

      <div>
        <img className={style.sendImg} src={sendIcon} alt="" />
      </div>
    </div>
  );
}

export default Inputs;