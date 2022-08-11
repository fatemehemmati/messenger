import React from 'react';
import style from './Modal.module.css';

const Modal = (props) => {
  const { text, changeError } = props;
  const closeModal = () => {
    changeError(null);
   }
  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <div className={style.errorMessage}> {text}</div>
        <button type="button" onClick={()=>closeModal()} className={style.button}>ok</button>
      </div>
    </div>
  );
}

export default Modal