import React,{useState} from 'react'


import style from './Inputs.module.css';
import attachFileImg from '../../assets/images/paperclip.png';
import sendIcon from "../../assets/images/SendButton.png";

const Inputs = (props) => {
  const [inputText, setInputText] = useState('');
const sendMessage = () => {
   fetch(
     "http://localhost:1337/api/messages?filters[chat][id][$eq]=2&populate=*",
     {
       method: "POST",
       body: JSON.stringify({
         data: {
           Text: inputText,
           Owner: 1,
           chat: props.ChatPage,
         },
       }),
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
     }
   )
     .then((res) => {
       return res.json();
     })
     .then((response) => {
       console.log(response);
     });
 };
    const clickHandler = () => {
     props.changePage("upload");
  };

  const saveMessageHandler = (e) => {
    setInputText(e.target.value)
   
  }
  const sendHandler = () => {
     props.setMessage(inputText);
  }
 console.log(inputText,`input text`)
  return (
    <div className={style.inputContainer}>
      <input
        className={style.inputText}
        type="text"
        name="message"
        onChange={saveMessageHandler}
        value={inputText}
      />
      <div onClick={clickHandler}>
        <img src={attachFileImg} className={style.fileImg} alt="" />
      </div>

      <div>
        <img
          onClick={sendMessage}
          className={style.sendImg}
          src={sendIcon}
          alt=""
        />
      </div>
    </div>
  );
}

export default Inputs;