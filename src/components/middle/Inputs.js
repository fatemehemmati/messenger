import React, { useState } from "react";
import Modal from "../ui/Modal";
import style from "./Inputs.module.css";
import attachFileImg from "../../assets/images/paperclip.png";
import sendIcon from "../../assets/images/SendButton.png";

const Inputs = (props) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(null);

  const sendMessage = () => {
    fetch("http://localhost:1337/ap/essages?populate=*", {
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
        setInputText("");
      })
      .catch((error) => {
        setError("something went wrong (sending message)");
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
      {error && <Modal text={error} changeError={(stat) => setError(stat)} />}
    </div>
  );
};

export default Inputs;
