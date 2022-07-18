import React from 'react'
import style from './Inputs.module.css';
const Inputs = () => {
  return (
    <div className={style.inputContainer}>
      <input className={style.input} type="text" />
    </div>
  );
}

export default Inputs;