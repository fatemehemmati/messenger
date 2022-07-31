import React from 'react';
import style from './People.module.css';
import proPic from "../../assets/images/Profile_avatar_placeholder.png";

const People = () => {
  return (
    <div className={style.container}>
      <p>people</p>
      <div className={style.contacts}>
        <img src={proPic} className={style.avatar} alt="" />
      </div>
      <div className={style.contacts}>
        <img src={proPic} className={style.avatar} alt="" />
      </div>
      <div className={style.contacts}>
        <img src={proPic} className={style.avatar} alt="" />
      </div>
    </div>
  );
}

export default People;