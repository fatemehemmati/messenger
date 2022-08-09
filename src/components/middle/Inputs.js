import React, {  useState } from "react";

import style from "./Inputs.module.css";
import attachFileImg from "../../assets/images/paperclip.png";
import sendIcon from "../../assets/images/SendButton.png";

const Inputs = (props) => {
  
  const [inputText, setInputText] = useState("");
 

  const sendMessage = () => {
    console.log(props.ChatPage.id.data,"new msggggggggg");
    fetch("http://localhost:1337/api/messages?populate=*", {
      method: "POST",
      body: JSON.stringify({
        data: {
          Text: inputText,
          Owner: 1,
          chat: props.ChatPage.id,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        props.addMessage((current) => [...current, response.data]);
       setInputText('');
      });
  };
  const clickHandler = () => {
    props.changePage("upload");
  };

  const saveMessageHandler = (e) => {
    setInputText(e.target.value);
  };

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
};

export default Inputs;
